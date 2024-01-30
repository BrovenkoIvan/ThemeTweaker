import styled from 'styled-components/native';

interface UITextProps {
  $focused?: boolean;
}
export const UIText = styled.Text<UITextProps>`
  color: ${props => (props.$focused ? props.theme.selectedText : props.theme.text)};
  font-size: ${props => props.theme.fontSize}px;
  font-family: ${props => props.theme.fontFamily};
`;
