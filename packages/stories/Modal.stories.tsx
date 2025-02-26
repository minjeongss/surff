import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "../components/Modal/Modal";
import useDisclosure from "../hooks/useDisclosure";
import { ModalProps } from "../components/Modal/Modal.d";

const meta = {
  title: "components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    commentSubtitle: "Portal을 활용한 Modal 생성에 이 컴포넌트를 사용합니다.",
  },
  args: {
    isOpen: false,
    onClose: () => {},
    position: "center",
    header: "Modal Header Part",
    body: "Modal Body Part",
  },
  argTypes: {
    isOpen: {
      control: {
        type: "boolean",
      },
      description: "Modal의 열림/닫힘 여부를 결정합니다.",
    },
    onClose: {
      action: "closed",
      description: "Modal을 닫는 함수입니다.",
    },
    position: {
      control: {
        type: "select",
      },
      options: ["top", "center", "bottom"],
      description: "Modal이 나타나는 위치를 결정합니다.",
    },
    header: {
      control: {
        type: "text",
      },
      description: "Modal의 헤더이며, string 또는 ReactNode가 사용됩니다.",
    },
    body: {
      control: {
        type: "text",
      },
      description: "Modal의 내용이며, string 또는 ReactNode가 사용됩니다.",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure(false);
  return (
    <>
      <button onClick={onOpen}>OPEN 🐋</button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={onClose}
        position={args.position}
      />
    </>
  );
};

const TemplateOpen = (args: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure(true);
  return (
    <>
      <button onClick={onOpen}>OPEN 🐋</button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={onClose}
        position={args.position}
      />
    </>
  );
};

export const Default: Story = {
  render: Template,
};

export const DefaultOpen: Story = {
  render: TemplateOpen,
};
