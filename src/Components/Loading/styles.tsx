import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_600};
`;

export const LoadIndicador = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_700
}))``;
