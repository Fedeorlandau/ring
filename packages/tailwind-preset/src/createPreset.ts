import { DesignTokens } from '@ring/design-tokens';

type CreatePresetProps = {
  designTokens: DesignTokens;
};
export function createPreset({ designTokens }: CreatePresetProps) {
  return { theme: designTokens.global };
}
