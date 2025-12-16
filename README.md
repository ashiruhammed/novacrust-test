# NovaCrust Test – Crypto ↔ Cash Flow UI

A small Next.js 14 app that implements a **multi‑step crypto to cash flow** with a modern UI. It showcases:

- Crypto → cash conversion (with wallet + token selection)
- A stepper-style flow for **recipient details**, **ETH address**, and **transaction complete** states
- Reusable UI primitives (buttons, inputs, tabs, selects)
- React Hook Form for form state and validation

This codebase is meant as a **frontend demo / test project** – no real blockchain or payments integration is wired up.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: `react-hook-form`
- **Icons**: Custom SVG React components + `lucide-react`

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm / npm / yarn / bun (any of them)

### Installation

```bash
# clone
git clone https://github.com/ashiruhammed/novacrust-test.git
cd novacrust-test

# install deps (choose one)
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Run the dev server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open `http://localhost:3000` in your browser.

The main page lives in `src/app/page.tsx`. Changes you make there (and in components under `src/components`) will hot‑reload.

---

## Core Flow

The app implements a **4‑step flow** inside `src/app/page.tsx` using `react-hook-form`:

1. **Crypto → Cash Setup**

   - Component: `CryptoSwap` → `CryptoCash`
   - Choose:
     - Token to pay with (e.g. `USDT – CELO`, `USDT – TON`, `USDT – BNB`)
     - Currency to receive (currently NGN)
     - Wallet to pay from / pay to (Metamask, Rainbow, WalletConnect, Other)
   - Validation ensures the main fields are selected before continuing.

2. **Recipient Details**

   - Component: `RecepientDetails`
   - Captures bank, account number, recipient email, and phone.

3. **ETH Address**

   - Component: `EthAddress`
   - Captures / confirms the ETH address that will receive funds.

4. **Transaction Completed**
   - Component: `TransactionCompleted`
   - Shows a completion state and allows restarting the flow.

There are also tabs for **Cash → Crypto** and **Crypto → Fiat Loan**, where `CashCryptoTab` currently renders a simple "Coming Soon" email capture UI.

---

## Project Structure

```text
src/
  app/
    layout.tsx        # Root layout
    page.tsx          # Main multi-step flow
  components/
    ui/               # Reusable UI primitives (button, input, label, select, tabs)
    icons/            # SVG icons (wallets, tokens, logo)
    widgets/
      crypto-swap.tsx         # Top-level tabs for Crypto ↔ Cash
      eth-address.tsx         # ETH address step
      recipient-detaills.tsx  # Recipient details step
      transaction-completed.tsx # Final success screen
    tabs/
      crypto-cash.tsx  # Crypto → cash configuration form
      cash-crypto.tsx  # "Coming soon" email capture
```

---

## Key Components

- **`CryptoSwap`** (`src/components/widgets/crypto-swap.tsx`)

  - Renders tabs: `Crypto to cash`, `Cash to crypto`, `Crypto to flat loan`.
  - Delegates to `CryptoCash` (main implemented flow) and `CashCryptoTab`.

- **`CryptoCash`** (`src/components/tabs/crypto-cash.tsx`)

  - Handles token search/select, receive currency select, and wallet route selection.
  - Integrates with `react-hook-form` via `useFormContext`.

- **`CashCryptoTab`** (`src/components/tabs/cash-crypto.tsx`)

  - "Coming soon" screen + email capture field.

- **Widgets under `widgets/`**
  - Compose the individual steps (recipient details, ETH address, success screen).

---

## Development Notes

- Form state and validation are managed centrally via `FormProvider` in `page.tsx`.
- The flow controller (`step` state) lives in `page.tsx` and is passed down via props (`onNextStep`, `onPrevStep`, `onRestart`).
- Styling is handled with Tailwind classes; tweak them directly in the JSX for quick visual changes.

---

## License

This repository is provided for testing / demo purposes. No specific open-source license has been declared; treat it as **all rights reserved** unless the author updates the license.
