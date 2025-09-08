export type DataLayerItem = {
	[key: string]: unknown
}

declare global {
	interface Window {
		dataLayer: DataLayerItem[]
	}
}
