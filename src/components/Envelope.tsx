import styled from 'styled-components';
import TextField from './TextField';
import { Subtitle1 } from './Typography';
import { BadgeType } from '../assets/badges';
import { envelopes } from '../assets/envelopes';

interface EnvelopeProps {
  badge: BadgeType;
  senderValue: string;
  onChange: (sender: string) => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ badge, senderValue: sender, onChange }) => {
  return (
    <StyledEnvelope className="Envelope">
      <Top color={envelopes[badge].color} />
      <BodyWrapper src={envelopes[badge].url}>
        <SenderContainer>
          <Subtitle1 sansita color="gray_0">
            From
          </Subtitle1>
          <TextField
            value={sender}
            onChange={(e) => onChange(e.target.value)}
            placeholder="보낼 이름을 입력해 주세요."
          />
        </SenderContainer>
      </BodyWrapper>
    </StyledEnvelope>
  );
};

const StyledEnvelope = styled.div`
  position: relative;
  width: 100%;
`;

const Top = styled.div<{ color: string }>`
  position: absolute;
  background-color: ${({ color }) => color};
  height: 172px;
  width: 100%;
  border-radius: 13.13px;
  top: -56px;
  z-index: 0;
`;
const BodyWrapper = styled.div<{ src: string }>`
  z-index: 10;
  position: absolute;
  width: 100%;
  background-image: url(${({ src }) => src});
  height: 177px;
  padding: 0 41px;
`;

const SenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: auto;
  position: relative;
  top: 61px;
  width: 100%;
`;

export default Envelope;
