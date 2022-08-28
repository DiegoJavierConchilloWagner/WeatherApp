export const operatingSystems = {
	WINDOWS: 'WINDOWS',
	ANDROID: 'ANDROID',
	IOS: 'IOS',
	OTHER: 'OTHER'
}

export const getOperatingSystem = () => {
	const userAgent = navigator.userAgent || navigator.vendor

	if (/android/i.test(userAgent)) {
		return operatingSystems.ANDROID
	}

	if (/iPad|iPhone|iPod/.test(userAgent)) {
		return operatingSystems.IOS
	}

	return operatingSystems.OTHER
}

export const isMobile = () => {
	const currentOS = getOperatingSystem()
	return currentOS === operatingSystems.ANDROID || currentOS === operatingSystems.IOS
}
