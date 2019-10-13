import * as React from 'react';
import { observer } from 'mobx-react-lite';

import {
  StyledNewsItem,
  Img,
  Info,
  Title,
  Footer,
  SourceIcon,
  Source,
  Fill,
  Description,
} from './style';
import { INewsItem } from '~/interfaces/news-item';

export const NewsItem = observer(
  ({
    item,
    column,
    row,
    width,
    height,
  }: {
    item: INewsItem;
    column: number;
    row: number;
    width: number;
    height: number;
  }) => {
    const [img, setImg] = React.useState('');

    const image = new Image();
    const src = item.urlToImage;

    image.onload = () => {
      setImg(src);
    };
    image.src = src;

    if (image.complete) {
      this.image = src;
    }

    const fullSize = width === 2;

    return (
      <StyledNewsItem
        fullSize={fullSize}
        style={{
          gridArea: `${row} / ${column + 1} / span ${height} / span ${width}`,
        }}
      >
        <Img src={img}></Img>
        <Info fullSize={fullSize}>
          <Title fullSize={fullSize}>{item.title}</Title>
          <Description>{item.description}</Description>
          {fullSize && <Fill />}
          <Footer>
            <Source>{item.source.name}</Source>
          </Footer>
        </Info>
      </StyledNewsItem>
    );
  },
);
