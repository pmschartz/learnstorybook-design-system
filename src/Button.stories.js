import React from "react";
import styled from "styled-components";

import { ButtonOld } from "./Button";
import { Icon } from "./Icon";
import { StoryLinkWrapper } from "./StoryLinkWrapper";

const CustomButton = styled.button`
  border: 1px solid green;
  background: purple;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function ButtonWrapper(props) {
  return <CustomButton {...props} />;
}

export default {
  title: "Design System/Button",
  component: ButtonOld,
};

export const AllButtons = (args) => (
  <div>
    <ButtonOld appearance="primary">Primary</ButtonOld>
    <ButtonOld appearance="secondary">Secondary</ButtonOld>
    <ButtonOld appearance="tertiary">Tertiary</ButtonOld>
    <ButtonOld appearance="outline">Outline</ButtonOld>
    <ButtonOld appearance="primaryOutline">Outline primary</ButtonOld>
    <ButtonOld appearance="secondaryOutline">Outline secondary</ButtonOld>
    <ButtonOld appearance="primary" isDisabled>
      Disabled
    </ButtonOld>
    <br />
    <ButtonOld appearance="primary" isLoading>
      Primary
    </ButtonOld>
    <ButtonOld appearance="secondary" isLoading>
      Secondary
    </ButtonOld>
    <ButtonOld appearance="tertiary" isLoading>
      Tertiary
    </ButtonOld>
    <ButtonOld appearance="outline" isLoading>
      Outline
    </ButtonOld>
    <ButtonOld appearance="outline" isLoading loadingText="Custom...">
      Outline
    </ButtonOld>
    <br />
    <ButtonOld appearance="primary" size="small">
      Primary
    </ButtonOld>
    <ButtonOld appearance="secondary" size="small">
      Secondary
    </ButtonOld>
    <ButtonOld appearance="tertiary" size="small">
      Tertiary
    </ButtonOld>
    <ButtonOld appearance="outline" size="small">
      Outline
    </ButtonOld>
    <ButtonOld appearance="primary" isDisabled size="small">
      Disabled
    </ButtonOld>
    <ButtonOld appearance="outline" size="small" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </ButtonOld>
    <ButtonOld appearance="outline" size="small">
      <Icon icon="link" />
      Link
    </ButtonOld>
  </div>
);

AllButtons.storyName = "all buttons";

export const buttonWrapper = (args) => (
  <div>
    <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
    <br />
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="primary">
      Primary
    </ButtonOld>
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="secondary">
      Secondary
    </ButtonOld>
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="tertiary">
      Tertiary
    </ButtonOld>
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="outline">
      Outline
    </ButtonOld>
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="primaryOutline">
      Outline primary
    </ButtonOld>
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="secondaryOutline">
      Outline secondary
    </ButtonOld>
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="primary" isDisabled>
      Disabled
    </ButtonOld>
    <br />
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="primary" isLoading>
      Primary
    </ButtonOld>
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="secondary" isLoading>
      Secondary
    </ButtonOld>
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="tertiary" isLoading>
      Tertiary
    </ButtonOld>
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="outline" isLoading>
      Outline
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={ButtonWrapper}
      appearance="outline"
      isLoading
      loadingText="Custom..."
    >
      Outline
    </ButtonOld>
    <br />
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="primary" size="small">
      Primary
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={ButtonWrapper}
      appearance="secondary"
      size="small"
    >
      Secondary
    </ButtonOld>
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="tertiary" size="small">
      Tertiary
    </ButtonOld>
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
      Outline
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={ButtonWrapper}
      appearance="primary"
      isDisabled
      size="small"
    >
      Disabled
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={ButtonWrapper}
      appearance="outline"
      size="small"
      containsIcon
    >
      <Icon icon="link" aria-label="Link" />
    </ButtonOld>
    <ButtonOld ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
      <Icon icon="link" />
      Link
    </ButtonOld>
  </div>
);

buttonWrapper.storyName = "button wrapper";

export const AnchorWrapper = (args) => (
  <div>
    <StoryLinkWrapper to="http://storybook.js.org">
      Original Link Wrapper
    </StoryLinkWrapper>
    <br />
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      href="http://storybook.js.org"
    >
      Primary
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondary"
      href="http://storybook.js.org"
    >
      Secondary
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="tertiary"
      href="http://storybook.js.org"
    >
      Tertiary
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      href="http://storybook.js.org"
    >
      Outline
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="primaryOutline"
      href="http://storybook.js.org"
    >
      Outline primary
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondaryOutline"
      href="http://storybook.js.org"
    >
      Outline secondary
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isDisabled
      href="http://storybook.js.org"
    >
      Disabled
    </ButtonOld>
    <br />
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isLoading
      href="http://storybook.js.org"
    >
      Primary
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondary"
      isLoading
      href="http://storybook.js.org"
    >
      Secondary
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="tertiary"
      isLoading
      href="http://storybook.js.org"
    >
      Tertiary
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      isLoading
      href="http://storybook.js.org"
    >
      Outline
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      isLoading
      loadingText="Custom..."
      href="http://storybook.js.org"
    >
      Outline
    </ButtonOld>
    <br />
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      size="small"
      href="http://storybook.js.org"
    >
      Primary
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondary"
      size="small"
      href="http://storybook.js.org"
    >
      Secondary
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="tertiary"
      size="small"
      href="http://storybook.js.org"
    >
      Tertiary
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      href="http://storybook.js.org"
    >
      Outline
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isDisabled
      size="small"
      href="http://storybook.js.org"
    >
      Disabled
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      containsIcon
      href="http://storybook.js.org"
    >
      <Icon icon="link" aria-label="Link" />
    </ButtonOld>
    <ButtonOld
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      href="http://storybook.js.org"
    >
      <Icon icon="link" />
      Link
    </ButtonOld>
  </div>
);

AnchorWrapper.storyName = "anchor wrapper";
