interface TimelineItemProps {
  week: string;
  title: string;
  description: string;
}

export const TimelineItem = ({ week, title, description }: TimelineItemProps) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="ml-4">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          {week}
        </span>
        <h4 className="text-lg font-semibold text-foreground mt-1">{title}</h4>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};
