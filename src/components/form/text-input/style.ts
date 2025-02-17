import { styled } from 'linaria/react';
import { ThemeMode, PUITheme } from 'utils/types';
import { transparentize } from 'polished';

export const StyledTextInput = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
  error;
  iconBefore?: HTMLObjectElement | JSX.Element;
  iconAfter?: HTMLObjectElement | JSX.Element;
}>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: transparent;
  position: relative;

  .fieldWrapper {
    display: flex;
    align-items: center;
    width: 100%;

    .inputField {
      width: 100%;
      display: flex;
      align-items: center;
      color: ${(props: any): string => props.theme.colors.base700};
      border: 1px solid ${(props: any): string => props.theme.colors.base700};
      border-radius: 4px;
      position: relative;

      & .iconBefore {
        position: absolute;
        left: 16px;
        top: calc(50% - 8px);
        width: 16px;
        height: 16px;
        color: ${(props: any): string => props.theme.colors.base700};
      }

      & .iconAfter {
        position: absolute;
        right: 16px;
        top: calc(50% - 8px);
        width: 16px;
        height: 16px;
        color: ${(props: any): string => props.theme.colors.base700};
      }

      & .input {
        width: 100%;
        border: none;
        border-radius: 4px;
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.base700 : props.theme.colors.base900};
        background-color: transparent;
        font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
        padding: 13px 16px;
        padding-left: ${(props: any): string => {
          if (props.iconBefore) return '40px';
          return '16px';
        }};
        padding-right: ${(props: any): string => {
          if (props.iconAfter) return '40px';
          return '16px';
        }};

        &::placeholder {
          color: ${(props: any): string => props.theme.colors.base700};
        }
      }

      &Error {
        border-color: ${(props: any): string => props.theme.colors.error};
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
      }

      &Disabled {
        pointer-events: none;
        /* border-color: ${(props: any): string => props.theme.colors.base400}; */
        background-color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? transparentize(0.4, props.theme.colors.base700) : props.theme.colors.base400};
        opacity: 0.4;
      }

      &:hover {
        border-color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.primary500};
      }

      &:focus-within {
        box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.base900};
        z-index: 10;
      }
    }
  }

  .inputTitle {
    color: ${(props: any): string => props.theme.colors.base900};
  }

  .inputSubtitle {
    color: ${(props: any): string => props.theme.colors.base700};
    margin-bottom: 4px;
  }

  .inputErrorLabel {
    height: 16px;
  }

  .counterWrapper {
    bottom: -16px;
    display: flex;
    justify-content: space-between;
    font-size: ${(props: any): string => props.theme.typography.sizes.xs.textSize};
    position: absolute;
    width: 100%;

    .counter {
    }

    .hidden {
      visibility: hidden;
    }
  }
`;
