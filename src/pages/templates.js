import TemplateHeader from "../containers/TemplateHeader";
import Card_1 from "../components/Cards/Card_1";
import Card_2 from "../components/Cards/Card_2"
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
            <div>
              <Card_2 />
            </div>
            <div>
              <Card_1 />
            </div>
            <div>
              <Card_1 />
            </div>
          </div>
        </div>
      </div>
  );
}

export default ExternalPage;