import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import { COLORS, QUERIES } from '../../constants.js';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryDivider>
              <SecondaryStory key={story.id} {...story} />
            </StoryDivider>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <StoryDivider>
              <OpinionStory key={story.id} {...story} />
            </StoryDivider>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 252px;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories'
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1.26fr 1fr 0.7fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';

    gap: 0;
  }
`;

const StoryDivider = styled.div`
  padding-block: 16px;

  &:not(:first-of-type) {
    border-top: 1px solid ${COLORS.gray[300]};
  }

  @media ${QUERIES.laptopAndUp} {
    &:first-of-type {
      padding-top: 0;
    }
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-inline: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
  }
`;

const OpinionStoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    gap: 32px;

    & > ${StoryDivider} {
      flex: 1;
      border-top: none;
    }
  }

  @media ${ QUERIES.laptopAndUp} {
    flex-direction: column;
    gap: 0;

    & > ${StoryDivider}:not(:first-of-type) {
      border-top: 1px solid ${COLORS.gray[300]};
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    margin-left: 16px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${COLORS.gray[300]}
  }
`;

export default MainStoryGrid;
