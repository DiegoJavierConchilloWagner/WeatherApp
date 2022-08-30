/* eslint-disable jsx-a11y/tabindex-no-positive */
import { useState } from 'react';

import Switch from 'react-switch';
import { useDispatch, useSelector } from 'react-redux';

import { dark, light } from '@styled/index';
import { ForecastMode } from '@common/enums';
import { setForecast } from '@redux/actions';
import { RootState } from '@redux/store/store';
import { StyledSpan, SwitchContainer } from './styled';

export const ForecastSwitch = () => {
	const dispatch = useDispatch();

	const [checked, setChecked] = useState<boolean>(true);

	const { themeMode } = useSelector((state: RootState) => state.uiInterface);

	const handleCheck = (): void => {
		setChecked(!checked);
		checked ? dispatch(setForecast(ForecastMode.HOUR)) : dispatch(setForecast(ForecastMode.DAYS));
	};

	return (
		<SwitchContainer>
			<StyledSpan>Forecast of the next</StyledSpan>
			<Switch
				tabIndex={7}
				onChange={handleCheck}
				checked={checked}
				height={40}
				width={100}
				borderRadius={30}
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
							fontSize: 15,
							color: 'white',
							paddingRight: 2,
							fontFamily: 'Poppins'
						}}>
						48 Hours
					</div>
				}
				checkedIcon={
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100%',
							fontSize: 15,
							color: 'white',
							paddingRight: 2,
							fontFamily: 'Poppins'
						}}>
						Week
					</div>
				}
			/>
		</SwitchContainer>
	);
};
