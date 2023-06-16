/* eslint-disable max-len */

export const Banner = ({ text, showBanner }: { text: string; showBanner?: boolean }) =>
  showBanner ? (
    <div
      id="banner"
      className="bordertext-green-500 border-primary bg-primary px-4 py-3 text-center sm:items-center lg:py-4"
    >
      <p className="text-sm font-semibold text-white">{text}</p>
    </div>
  ) : null;
