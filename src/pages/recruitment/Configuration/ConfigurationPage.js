import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TimePicker from '@mui/lab/TimePicker';

import FormContainer from '../../../components/FormContainer';
import Button from '../../../components/Button';

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colours.white};
  border: ${({ theme }) => theme.borders.solidGrey1};
  border-radius: 0.9375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  height: 100%;

  // TODO: remove min-dimension requirements once content is available
  /* min-height: 20rem; */

  -webkit-box-shadow: ${({ theme }) => theme.shadows.shadow1};
  -moz-box-shadow: ${({ theme }) => theme.shadows.shadow1};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
`;

const Container = styled.div`
  margin: ${({ theme }) => theme.pageMargin};
  position: relative;
`;

const PageTitle = styled.h1`
  font: ${({ theme }) => theme.fonts.bold36};
`;

const SectionContainer = styled.div`
  margin: 1rem 3rem;
`;

const SectionTitle = styled.h1`
  font: ${({ theme }) => theme.fonts.bold24};
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin: 2rem;
  align-self: flex-end;
`;

const CancelButton = styled(Button)`
  background-color: #afafaf;
  color: ${({ theme }) => theme.colours.white};
  font: ${({ theme }) => theme.fonts.bold18};
  padding: 8px 22px;
  border: none;
  text-decoration: none;
`;

const SaveButton = styled(Button)`
  padding: 8px 22px;
  width: 100px;
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateContainer = styled.div`
  display: flex;
  width: 40%;
`;

const TimeContainer = styled.div`
  display: flex;
  width: 50%;
`;

const ConfigurationPage = () => {
  const [date1, setDate1] = React.useState(new Date());
  const [date2, setDate2] = React.useState(new Date());
  const [date3, setDate3] = React.useState(new Date());
  const [date4, setDate4] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());
  const history = useHistory();

  const handleDate1Change = (newValue) => {
    setDate1(newValue);
  };

  const handleDate2Change = (newValue) => {
    setDate2(newValue);
  };

  const handleDate3Change = (newValue) => {
    setDate3(newValue);
  };

  const handleDate4Change = (newValue) => {
    setDate4(newValue);
  };

  const handleStartTimeChange = (newValue) => {
    setStartTime(newValue);
  };

  const handleEndTimeChange = (newValue) => {
    setEndTime(newValue);
  };

  const goBack = () => {
    history.push('/');
  };

  const saveForm = () => {
    /* TODO: Handle submit form when user clicks save */
    history.push('/');
  };

  return (
    <Container>
      <PageTitle>Configuration</PageTitle>

      <CardContainer>
        <SectionContainer>
          <SectionTitle>Interviews</SectionTitle>
          <OuterContainer>
            <LineContainer>
              <FormContainer title="Meeting Link">
                <TextField placeholder="URL" variant="outlined" />
              </FormContainer>
            </LineContainer>
            <LineContainer>
              <DateContainer>
                <FormContainer title="First Round Deadline">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="MM/dd/yyyy"
                      value={date1}
                      onChange={handleDate1Change}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormContainer>
              </DateContainer>
              <DateContainer>
                <FormContainer title="Second Round Deadline">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="MM/dd/yyyy"
                      value={date2}
                      onChange={handleDate2Change}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormContainer>
              </DateContainer>
            </LineContainer>
          </OuterContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>New Members Orientation</SectionTitle>
          <OuterContainer>
            <LineContainer>
              <FormContainer title="Meeting Link">
                <TextField
                  id="outlined-basic"
                  placeholder="URL"
                  variant="outlined"
                />
              </FormContainer>
            </LineContainer>
            <LineContainer>
              <DateContainer>
                <FormContainer title="Date">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="MM/dd/yyyy"
                      value={date3}
                      onChange={handleDate3Change}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormContainer>
              </DateContainer>
              <TimeContainer>
                <FormContainer title="Start Time">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Time"
                      value={startTime}
                      onChange={handleStartTimeChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormContainer>
                <FormContainer title="End Time">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      value={endTime}
                      onChange={handleEndTimeChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormContainer>
              </TimeContainer>
            </LineContainer>
          </OuterContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>Member Status Confirmation</SectionTitle>
          <OuterContainer>
            <LineContainer>
              <FormContainer title="Form Link">
                <TextField placeholder="URL" variant="outlined" />
              </FormContainer>
            </LineContainer>
            <LineContainer>
              <DateContainer>
                <FormContainer title="Deadline">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="MM/dd/yyyy"
                      value={date4}
                      onChange={handleDate4Change}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormContainer>
              </DateContainer>
            </LineContainer>
          </OuterContainer>
        </SectionContainer>

        <ButtonContainer>
          <CancelButton onClick={goBack} cancel="true">
            Cancel
          </CancelButton>
          <SaveButton onClick={saveForm} tertiary="true">
            Save
          </SaveButton>
        </ButtonContainer>
      </CardContainer>
    </Container>
  );
};

export default ConfigurationPage;
