
import React from "react";
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}
export interface InputEventType extends React.ChangeEvent<HTMLInputElement> {}
export interface SelectElementType extends React.ChangeEvent<HTMLSelectElement> {}