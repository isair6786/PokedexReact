export type ButtonOption = 'region' | 'types' | 'moves' | 'items'; // Definir los tipos que aceptará el color

export interface Button {
    name: string;
    option: ButtonOption;
}