import { fireEvent, render, screen } from '@testing-library/react';
import FeedbackForm from './advReactComponents/FeedbackFormTest';
import AppTwo from './advReactComponents/Test';

test('renders learn react link', () => {
  render(<AppTwo />);
  const linkElement = screen.getByText("Little Lemon Restaurant");
  expect(linkElement).toBeInTheDocument();
});

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput,{target:{value:score}})

    const commentCheck = screen.getByLabelText(/Comments:/);
    fireEvent.change(commentCheck,{target:{value:comment}})

    const submitButton = screen.getByRole("button")
    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput,{target:{value:score}})

    const submitButton = screen.getByRole("button")
    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});
