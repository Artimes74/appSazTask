import Svg, {Path, Rect} from 'react-native-svg';

type bottomIcon = {
  width: number;
  height: number;
  color: string;
};

export const HomeIcon = (props: bottomIcon) => {
  const {width, height, color} = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Rect width="24" height="24" transform="translate(0.5)" fill="white" />
      <Path
        d="M9.52 2.84001L4.13 7.04001C3.65049 7.45661 3.25923 7.96499 2.97928 8.53518C2.69934 9.10538 2.53638 9.72584 2.5 10.36L2.5 17.77C2.50131 18.8871 2.94497 19.9582 3.73393 20.749C4.52289 21.5398 5.59293 21.986 6.71 21.99H18.29C19.4055 21.9866 20.4743 21.5419 21.2631 20.7531C22.0519 19.9644 22.4966 18.8955 22.5 17.78V10.5C22.4623 9.83009 22.2822 9.1759 21.9718 8.58101C21.6614 7.98613 21.2279 7.46421 20.7 7.05001L14.52 2.71701C13.7685 2.23893 12.8917 1.99534 12.0013 2.01724C11.1109 2.03915 10.2471 2.32556 9.52 2.84001Z"
        fill={color}
        stroke="#FAFAFA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.5 17.99V14.99"
        stroke="#FAFAFA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const AddIcon = (props: bottomIcon) => {
  const {width, height, color} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 12H18"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 18V6"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
