import { useRef, useState } from "react";

const Otp = () => {
  const OTP_DIGITS = 4;
  const TotalInputBox = Array.from({ length: OTP_DIGITS });
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState("");

  const getCombinedOtp = () => {
    const otpValue = inputRefs.current.map((ref) => ref?.value).join("");
    setOtp(otpValue);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (value.length === 1 && !isNaN(Number(value))) {
      if (index < OTP_DIGITS - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      e.target.value = "";
    }
    getCombinedOtp();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter" && index < OTP_DIGITS - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <main>
      <div>
        <h1 className="text-center text-4xl font-serif">VALIDATE OTP</h1>
        <div className="flex items-center justify-center gap-2">
          {TotalInputBox.map((_, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center w-8 h-14"
              >
                <input
                  type="text"
                  maxLength={1}
                  placeholder="0"
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  className="border-2 border-black w-full text-center px-1 py-1.5"
                />
              </div>
            );
          })}
        </div>
        <div>
          <p>Combined OTP: {otp}</p>
        </div>
      </div>
    </main>
  );
};

export default Otp;
