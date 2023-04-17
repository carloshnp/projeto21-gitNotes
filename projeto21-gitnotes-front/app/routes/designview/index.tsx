import DesignContainer from "~/components/DesignContainer"
import DraggableContainer from "~/components/DraggableContainer"
import DraggableComponent from "~/components/Draggeble"
import View from "~/components/View"

export default function DesignerViewRoute() {
  const initialPosition = { x: 100, y: 100 };

  return (
    <View>
      <DesignContainer>
        <h1>Teste</h1>
        <DraggableComponent />
        <DraggableContainer />
      </DesignContainer>
    </View>
  );
}
