interface SectioTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectioTitleProps) => {
  return <h3 className="mb-5 font-bold uppercase">{title}</h3>;
};

export default SectionTitle;
