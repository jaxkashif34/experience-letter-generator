import React from "react";
import { LogoIcon } from "./Icons";
import { EditableField } from "./EditableField";
interface CompanyLogoProps {
  address: string;
  phone: string;
  email: string;
  onAddressChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  address,
  phone,
  email,
  onAddressChange,
  onPhoneChange,
  onEmailChange,
  onFocus,
  onBlur,
}) => {
  return (
    <div className="flex items-start gap-4">
      <LogoIcon className="w-14 h-14 flex-shrink-0 mt-1" />
      <div>
        <div className="text-3xl font-bold text-[#ef782a] leading-tight tracking-wider uppercase">
          Jazee
        </div>
        <div className="text-lg text-[#282828] tracking-widest uppercase -mt-1">
          Automation
        </div>
        <div className="mt-2 text-xs text-gray-600 space-y-1">
          <EditableField
            html={address}
            onChange={onAddressChange}
            className="m-0 p-0"
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <div className="flex items-center gap-4">
            <EditableField
              html={phone}
              onChange={onPhoneChange}
              className="m-0 p-0"
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <EditableField
              html={email}
              onChange={onEmailChange}
              className="m-0 p-0"
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
