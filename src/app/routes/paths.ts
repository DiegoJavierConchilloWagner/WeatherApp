import { lazy } from 'react'

export const Example = lazy(() =>
	import('@pages/Example/Example').then(module => ({
		default: module.Example
	}))
)
export const GenericNotFound = lazy(() =>
	import('@pages/GenericNotFound/GenericNotFound').then(module => ({
		default: module.GenericNotFound
	}))
)
