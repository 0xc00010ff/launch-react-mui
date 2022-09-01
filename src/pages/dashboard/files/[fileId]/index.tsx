import { useNavigate } from "react-router-dom";
import Detail from "../../../../components/Detail";
import ExampleFile from "../../../../models/ExampleFile";

type Props = {
  file?: ExampleFile;
  onClose?: () => void;
};

export default function FileDetail(props: Props = {}) {
  const navigate = useNavigate();

  return <Detail item={props.file} onClose={() => navigate("..")} />;
}
