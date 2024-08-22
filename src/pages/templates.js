import TemplateHeader from "../containers/TemplateHeader";
import Card_1 from "../components/Cards/Card_1"
import Card_2 from "../components/Cards/Card_2"
import Card_3 from "../components/Cards/Card_3"
import Card_4 from "../components/Cards/Card_4"
import Card_5 from "../components/Cards/Card_5"
function ExternalPage() {
  return (
    <div>
      <TemplateHeader />
      <div className="mt-20">
        <p className="text-2xl text-center">
          Let's create your first signature! Choose design that you like
        </p>
          <div className="grid grid-flow-row grid-cols-1 gap-6 mx-32 md:grid-cols-2 xl:grid-cols-3 auto-rows-max">
            <div className="row-auto">
              <Card_1 />
            </div>
            <div className="row-auto">
              <Card_2 />
            </div>
            <div className="row-auto">
              <Card_3 />
            </div>
            <div className="row-auto">
              <Card_4 />
            </div>
            <div className="row-auto">
              <Card_5 />
            </div>
          </div>
        </div>
      </div>
  );
}

export default ExternalPage;