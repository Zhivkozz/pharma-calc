import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the contributors contact form', async () => {
  window.history.pushState({}, '', '/contributors');
  render(<App />);

  expect(screen.getByText(/Honorable Contributors/i)).toBeInTheDocument();

  const nameInput = screen.getByLabelText(/your name/i);
  const emailInput = screen.getByLabelText(/your email/i);
  const messageInput = screen.getByLabelText(/your message/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();

  await userEvent.type(nameInput, 'Test User');
  await userEvent.type(emailInput, 'test@example.com');
  await userEvent.type(messageInput, 'I found a bug');

  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
});


