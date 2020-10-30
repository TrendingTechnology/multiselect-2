import { PopupContentsProps } from './PopupContents';
import { ButtonProps } from '@material-ui/core';

export type AddItemProps = {
  multiple: boolean;
  value: PopupContentsProps<string>['value'];
  onChange: PopupContentsProps<string>['onChange'];
  AddButtonProps?: Partial<ButtonProps>;
  AddDialogProps?: {
    title?: React.ReactNode;
    cancelButtonLabel?: React.ReactNode;
    addButtonLabel?: React.ReactNode;
  };
};