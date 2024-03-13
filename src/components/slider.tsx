import React from "react";
import useTheme from "../context/theme/theme-context";
import { darkTheme, lightTheme } from "../settings/themes";
import styled from "@emotion/styled";

interface ISliderProps {
    width?: string;
    height?: string;
    tHeight?: string;
    borderRadius?: string;
    theme?: typeof lightTheme | typeof darkTheme;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    marginTop?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = styled.input<ISliderProps>
`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};
    background-color: ${props => props.theme.backgroundColor};
    margin: 0px 12px;
    border: none;
    outline: none;

    -webkit-appearance: none;
    appearance: none;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: ${props => props.tHeight || '8px'};
        height: ${props => props.tHeight || '8px'};
        background-color: ${props => props.theme.buttonColor};
        border-radius: 50%;
        cursor: pointer;
        margin-top: ${props => props.marginTop || '0px'};
        transition: box-shadow 0.15s ease-in-out;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);

        &:hover {
            box-shadow: ${props => props.theme.hoverBoxShadow};
            transition: box-shadow 0.15s ease-in-out;
        }

        &:active {
            box-shadow: ${props => props.theme.clickBoxShadow};
            transition: box-shadow 0.15s ease-in-out;
        }
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: ${props => props.height || '4px'};
        background-color: ${props => props.theme.containerBgColor};
        border-radius: 24px;
    }
`

export default function Slider(props: ISliderProps) {
    const { theme } = useTheme();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.onChange && props.onChange(e)
    }

    return (
        <>
            <Input
                {... props}
                type="range"
                min={props.min}
                max={props.max}
                step={props.step}
                width={props.width}
                height={props.height}
                tHeight={props.tHeight}
                value={props.value}
                theme={theme}
                onChange={(e) => handleChange(e)}
            />
        </>
            
    );
};