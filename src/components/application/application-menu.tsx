import MPButton from '../ui/mpbutton.tsx';

interface IChoice {
  caption: string;
  route: string;
}

interface IProps {
  choices: IChoice[];
}

export default function ApplicationMenu({ choices }: IProps) {
  return (
    <div className="row">
      {choices.map((choice) => (
        <div key={choice.caption} className="col-2">
          <MPButton route={choice.route} caption={choice.caption} />
        </div>
      ))}
    </div>
  );
}
