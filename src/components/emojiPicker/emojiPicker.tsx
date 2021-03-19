import React, { FC } from 'react';
import rawEmojiData from './emojiCodes.json';
import styled from 'styled-components';
import { disableHighlight } from '@styles/mixins';

const GroupHeader = styled.div`
  color: #999;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 8px 16px;
  align-self: flex-start;
  position: sticky;
  z-index: 1;
`;

const EmojiPickerContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 324px;
  height: 320px;
  overflow-y: scroll;
  border: 1px solid #efefef;
  box-shadow: 0 4px 8px #efefef;
  border-radius: 8px;
  ${disableHighlight}
`;

const EmojiGroupContainer = styled.div`
  width: 308px;
`;

const EmojiContainer = styled.div`
  display: inline-block;
  padding: 2px 6px;
  font-size: 32px;
  cursor: pointer;
  &:hover {
    background: orange;
    border-radius: 6px;
  }
`;

interface EmojiProps {
  name: string
  code: string
  skin: string
}

const Emoji = ({ name, code, skin }: EmojiProps) => {
  return (
    <EmojiContainer>
      <span role="img" aria-label={`${name}`}>
        {String.fromCodePoint(
          ...`${skin ? skin[2] : code}`.split('-').map((c: string) => parseInt(`0x${c}`, 16))
        )}
      </span>
    </EmojiContainer>
  );
};

// TODO:
// allow picking of default skin tones
// highlight emojis onHover: fade in/out random color
// skip to section
// search box
// make recently used emoji section
// add all emojis for 2021
// sticky header for each section
// toggle show/hide inside of input field
// return chosen emoji

const EmojiPicker: FC = () => (
  <EmojiPickerContainer>
    {
      Object.entries(rawEmojiData).map(([category, emojiGroup], index: number) => (
        <>
          <GroupHeader>{category.replace('_', ' & ')}</GroupHeader>
          <EmojiGroupContainer key={`${index + 1}_${category}`}>
            {emojiGroup.map(({ n, u, v }, idx: number) => (
              <Emoji key={`${idx + 1}_${u}`} name={n} code={u} skin={v} />
            ))}
          </EmojiGroupContainer>
        </>
      ))
    }
  </EmojiPickerContainer>
);

export default EmojiPicker;
