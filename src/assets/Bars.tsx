interface BarsProps {
  class_name?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}
function Bars({ class_name, onClick }: BarsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1080 1080"
      width={64}
      height={64}
      className={(class_name ? class_name : "")}
      onClick={onClick}
    >
      <style />
      <path
        fillRule="evenodd"
        d="M0 90C0 40.2 30.2 0 67.5 0h810C914.8 0 945 40.2 945 90s-30.2 90-67.5 90h-810C30.2 180 0 139.8 0 90zm135 450c0-49.8 30.2-90 67.5-90h810c37.3 0 67.5 40.2 67.5 90s-30.2 90-67.5 90h-810c-37.3 0-67.5-40.2-67.5-90zm810 450c0 49.8-30.2 90-67.5 90h-810C30.2 1080 0 1039.8 0 990s30.2-90 67.5-90h810c37.3 0 67.5 40.2 67.5 90z"
      />
    </svg>
  )
}

export default Bars
