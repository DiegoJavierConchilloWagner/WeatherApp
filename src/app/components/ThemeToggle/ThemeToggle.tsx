/* eslint-disable jsx-a11y/tabindex-no-positive */
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';

import { light, dark } from '@styled/themes';
import { ThemeModes } from '@common/index';
import { setThemeMode } from '@redux/actions';
import { RootState } from '@redux/store/store';
import { WeatherIcon } from '../WeatherIcon/WeatherIcon';

import { StyledThemeToggle } from './styled';

export const ThemeToggle = () => {
	const dispatch = useDispatch();
	const [checked, setChecked] = useState<boolean>(true);

	const { themeMode } = useSelector((state: RootState) => state.uiInterface);

	const handleCheck = () => {
		setChecked(!checked);
		checked === true ? dispatch(setThemeMode(ThemeModes.LIGHT)) : dispatch(setThemeMode(ThemeModes.DARK));
	};

	return (
		<StyledThemeToggle>
			<Switch
				tabIndex={6}
				onChange={handleCheck}
				checked={checked}
				height={40}
				width={80}
				borderRadius={45}
				offColor={themeMode === 'LIGHT' ? light.colors.switch.secondary : dark.colors.switch.secondary}
				onColor={themeMode === 'LIGHT' ? light.colors.switch.secondary : dark.colors.switch.secondary}
				offHandleColor={themeMode === 'LIGHT' ? light.colors.switch.primary : dark.colors.switch.primary}
				onHandleColor={themeMode === 'LIGHT' ? light.colors.switch.primary : dark.colors.switch.primary}
				uncheckedIcon={
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							height: '100%',
							fontSize: 25,
							color: 'white',
							paddingRight: 2,
							fontFamily: 'Poppins'
						}}>
						<WeatherIcon id={800} icon='01d' size={30} isLoading={false} />
					</div>
				}
				checkedIcon={
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100%',
							fontSize: 25,
							color: 'white',
							paddingRight: 2,
							fontFamily: 'Poppins'
						}}>
						<WeatherIcon id={800} icon='01n' size={30} isLoading={false} />
					</div>
				}
			/>
		</StyledThemeToggle>
	);
};
