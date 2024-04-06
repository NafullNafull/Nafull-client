import { badges } from '../assets/badges';

type Props = {
  variant: keyof typeof badges;
  size: number;
  isLocked?: boolean;
};

const Badge = ({ variant, size, isLocked = false }: Props) => {
  const BadgeComponent = isLocked ? badges[variant].locked : badges[variant].unLocked;
  return <BadgeComponent width={size} height={size} />;
};

export default Badge;
