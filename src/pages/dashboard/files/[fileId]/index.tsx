import { useNavigate, useParams } from "react-router-dom";
import Detail from "../../../../components/Detail";
import useTitle from "../../../../utils/useTitle";

export default function FileDetail() {
  const params = useParams();
  const navigate = useNavigate();
  useTitle(`${params.fileId}`);

  return <Detail title={params.fileId} onClose={() => navigate("..")} />;
}
