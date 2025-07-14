export default defineEventHandler(async (event) => {
	const body = await readBody<{ name: string, phone: string, message?: string }>(event)

	if (!body?.phone)
		throw createError({ status: 400, statusMessage: 'Phone is required' })

	const text = [
		'📩 <b>Новая заявка</b>',
		`👤 ${body.name || '—'}`,
		`📞 ${body.phone}`,
		body.message ? `💬 ${body.message}` : '',
	].filter(Boolean).join('\n')

	const config = useRuntimeConfig()
	const res = await $fetch(`https://api.telegram.org/bot${config.telegramToken}/sendMessage`, {
		method: 'POST',
		body: {
			chat_id: config.telegramChatId,
			text,
			parse_mode: 'HTML',
		},
	})

	return { ok: true, result: res }
})
