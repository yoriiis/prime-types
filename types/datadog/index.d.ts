declare global {
	interface Window {
		DD_RUM: {
			onReady: (callback: () => void) => void
			addTiming: (name: string) => void
			init: (params: { applicationId: string; clientToken: string; site: string }) => void
		}
	}
}
