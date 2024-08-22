import React, { useState } from "react";
import { Button, Collapse } from "antd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  SignatureOutlined,
  SignatureFilled,
  CloseOutlined,
} from "@ant-design/icons";

import TitleCard from "../../../components/Cards/TitleCard";

const initialItems = [
  {
    key: "1",
    label: "MyPage",
    children: <button onClick={() => console.log("r")}>r</button>,
    expandIcon: ({ isActive }) =>
      isActive ? <SignatureFilled /> : <SignatureOutlined />,
    collapsible: "header",
  },
  {
    key: "2",
    label: "Sign-off",
    children: <button onClick={() => console.log("r")}>r</button>,
    expandIcon: ({ isActive }) =>
      isActive ? <SignatureFilled /> : <SignatureOutlined />,
    collapsible: "disabled",
  },
  {
    key: "3",
    label: "Event & Calendar",
    children: <button onClick={() => console.log("r")}>r</button>,
    expandIcon: ({ isActive }) =>
      isActive ? <MinusCircleOutlined /> : <PlusCircleOutlined />,
    collapsible: "disabled",
  },
  {
    key: "4",
    label: "social",
    children: <button onClick={() => console.log("r")}>r</button>,
    expandIcon: ({ isActive }) =>
      isActive ? <MinusCircleOutlined /> : <PlusCircleOutlined />,
    collapsible: "disabled",
  },
  {
    key: "5",
    label: "CTA",
    children: <button onClick={() => console.log("r")}>r</button>,
    expandIcon: ({ isActive }) =>
      isActive ? <MinusCircleOutlined /> : <PlusCircleOutlined />,
    collapsible: "disabled",
  },
  {
    key: "6",
    label: "MarketPlace&Retail",
    children: <button onClick={() => console.log("r")}>r</button>,
    expandIcon: ({ isActive }) =>
      isActive ? <MinusCircleOutlined /> : <PlusCircleOutlined />,
    collapsible: "disabled",
  },
  {
    key: "7",
    label: "disclaimer",
    children: <button onClick={() => console.log("r")}>r</button>,
    expandIcon: ({ isActive }) =>
      isActive ? <MinusCircleOutlined /> : <PlusCircleOutlined />,
    collapsible: "disabled",
  },
  {
    key: "8",
    label: "Video conference",
    children: <button onClick={() => console.log("r")}>r</button>,
    expandIcon: ({ isActive }) =>
      isActive ? <MinusCircleOutlined /> : <PlusCircleOutlined />,
    collapsible: "disabled",
  },
  {
    key: "9",
    label: "Green Message",
    children: <button onClick={() => console.log("r")}>r</button>,
    expandIcon: ({ isActive }) =>
      isActive ? <MinusCircleOutlined /> : <PlusCircleOutlined />,
    collapsible: "disabled",
  },
];

const Addons = () => {
  const [items, setItems] = useState(initialItems);

  // Function to handle drag end event
  const onDragEnd = (result) => {
    const { destination, source } = result;

    // If the item is dropped outside the list, do nothing
    if (!destination) {
      return;
    }

    // If the item is dropped in the same position, do nothing
    if (destination.index === source.index) {
      return;
    }

    // Reorder the items array
    const reorderedItems = Array.from(items);
    const [removedItem] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, removedItem);

    // Update state with the new order
    setItems(reorderedItems);
  };

  const changeCollapsible = (key) => {
    setItems(
      items.map((item) =>
        item.key === key
          ? item.collapsible === "disabled"
            ? { ...item, collapsible: "header" }
            : { ...item, collapsible: "disabled" }
          : item
      )
    );
  };
  return (
    <>
      <TitleCard title={"Added addons"}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items
                  .filter((item) => item.collapsible === "header")
                  .map((item, index) => (
                    <Draggable
                      key={item.key}
                      draggableId={item.key}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style, // Essential to keep positioning intact
                            marginBottom: 10, // Only apply margin outside of draggable's positioning styles
                          }}
                          className="flex items-center gap-2"
                        >
                          <Collapse
                            size="small"
                            expandIcon={item.expandIcon}
                            style={{
                              borderRadius: 20,
                            }}
                            className="w-full overflow-hidden bg-white shadow-md"
                            items={[item]}
                          />
                          <Button
                            size="small"
                            shape="circle"
                            icon={<CloseOutlined />}
                            onClick={() => changeCollapsible(item.key)}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </TitleCard>
      <TitleCard title={"Added addons"}>
        {items
          .filter((item) => item.collapsible === "disabled")
          .map((item, index) => (
            <div
              style={{
                marginBottom: 10, // Only apply margin outside of draggable's positioning styles
              }}
              key={item.key}
              className="flex w-full gap-3 p-2 px-3 text-sm border rounded-full shadow-md cursor-pointer hover:shadow-lg"
              onClick={() => changeCollapsible(item.key)}
            >
              <p>{item.expandIcon(false)}</p>
              <p>{item.label}</p>
            </div>
          ))}
      </TitleCard>
    </>
  );
};

export default Addons;
