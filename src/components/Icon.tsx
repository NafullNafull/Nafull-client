import { icons } from '../assets/icons';
import { ColorAlias, colors } from '../theme/theme';

type Props = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
  icon: keyof typeof icons;
  color: ColorAlias;
};

const Icon = ({ icon, width, height, color, ...props }: Props) => {
  const IconComponent = icons[icon];
  return <IconComponent width={width} height={height} color={colors[color]} {...props} />;
};

export default Icon;
