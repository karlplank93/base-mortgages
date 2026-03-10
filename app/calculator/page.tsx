'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';

interface CalculatorMetadata extends Metadata {
  title?: string;
  description?: string;
}

// Note: Metadata export not possible in client components
// Add this to layout or route segment config in parent directory

export default function CalculatorPage() {
  // Repayment Calculator State
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(25);

  // Refinance Calculator State
  const [currentRate, setCurrentRate] = useState(5.5);
  const [newRate, setNewRate] = useState(4.75);
  const [loanBalance, setLoanBalance] = useState(500000);
  const [remainingTerm, setRemainingTerm] = useState(20);

  // Active tab
  const [activeTab, setActiveTab] = useState<'repayment' | 'refinance'>(
    'repayment'
  );

  // Repayment Calculator - Standard Amortisation Formula
  const repaymentCalculation = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      // If no interest, simple division
      const monthlyPayment = principal / numberOfPayments;
      return {
        monthly: monthlyPayment,
        fortnightly: (monthlyPayment * 12) / 26,
        weekly: (monthlyPayment * 12) / 52,
      };
    }

    // Standard amortisation formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
    const monthlyPayment = principal * (numerator / denominator);

    return {
      monthly: monthlyPayment,
      fortnightly: (monthlyPayment * 12) / 26,
      weekly: (monthlyPayment * 12) / 52,
    };
  }, [loanAmount, interestRate, loanTerm]);

  // Refinance Savings Calculator
  const refinanceSavings = useMemo(() => {
    const principal = loanBalance;
    const currentMonthlyRate = currentRate / 100 / 12;
    const newMonthlyRate = newRate / 100 / 12;
    const numberOfPayments = remainingTerm * 12;

    const calculateMonthlyPayment = (rate: number) => {
      if (rate === 0) {
        return principal / numberOfPayments;
      }
      const numerator = rate * Math.pow(1 + rate, numberOfPayments);
      const denominator = Math.pow(1 + rate, numberOfPayments) - 1;
      return principal * (numerator / denominator);
    };

    const currentMonthly = calculateMonthlyPayment(currentMonthlyRate);
    const newMonthly = calculateMonthlyPayment(newMonthlyRate);
    const monthlySaving = currentMonthly - newMonthly;
    const annualSaving = monthlySaving * 12;
    const totalSaving = monthlySaving * numberOfPayments;

    return {
      monthlySaving: Math.max(0, monthlySaving),
      annualSaving: Math.max(0, annualSaving),
      totalSaving: Math.max(0, totalSaving),
    };
  }, [currentRate, newRate, loanBalance, remainingTerm]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-NZ', {
      style: 'currency',
      currency: 'NZD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">
              Calculator
            </span>
          </div>
          <h1
            className="mb-4 font-bold text-gray-900"
            style={{
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Mortgage & refinance calculator
          </h1>
          <p className="text-lg text-gray-500">
            Get a quick estimate of your repayments and potential savings.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setActiveTab('repayment')}
                className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'repayment'
                    ? 'border-b-2 border-teal-600 text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Repayment Calculator
              </button>
              <button
                onClick={() => setActiveTab('refinance')}
                className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'refinance'
                    ? 'border-b-2 border-teal-600 text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Refinance Savings
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'repayment' ? (
                <div className="space-y-8">
                  {/* Loan Amount */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="font-semibold text-gray-900">
                        Loan Amount
                      </label>
                      <span className="font-bold text-teal-600">
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100000"
                      max="2000000"
                      step="10000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="mb-3 h-2 w-full appearance-none rounded-full bg-gray-200 outline-none accent-teal-600"
                    />
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      min="100000"
                      max="2000000"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2 text-gray-900 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="font-semibold text-gray-900">
                        Interest Rate
                      </label>
                      <span className="font-bold text-teal-600">
                        {interestRate.toFixed(2)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="mb-3 h-2 w-full appearance-none rounded-full bg-gray-200 outline-none accent-teal-600"
                    />
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      min="1"
                      max="10"
                      step="0.1"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2 text-gray-900 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>

                  {/* Loan Term */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="font-semibold text-gray-900">
                        Loan Term
                      </label>
                      <span className="font-bold text-teal-600">
                        {loanTerm} years
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="1"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="mb-3 h-2 w-full appearance-none rounded-full bg-gray-200 outline-none accent-teal-600"
                    />
                    <input
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      min="5"
                      max="30"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2 text-gray-900 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>

                  {/* Results */}
                  <div className="space-y-4 rounded-xl bg-gray-50 p-6">
                    <div>
                      <p className="mb-1 text-sm font-semibold text-teal-600 uppercase tracking-widest">
                        Weekly
                      </p>
                      <p className="text-3xl font-bold text-navy-900">
                        {formatCurrency(repaymentCalculation.weekly)}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold text-teal-600 uppercase tracking-widest">
                        Fortnightly
                      </p>
                      <p className="text-3xl font-bold text-navy-900">
                        {formatCurrency(repaymentCalculation.fortnightly)}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold text-teal-600 uppercase tracking-widest">
                        Monthly
                      </p>
                      <p className="text-3xl font-bold text-navy-900">
                        {formatCurrency(repaymentCalculation.monthly)}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Current Rate */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="font-semibold text-gray-900">
                        Current Interest Rate
                      </label>
                      <span className="font-bold text-teal-600">
                        {currentRate.toFixed(2)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="0.1"
                      value={currentRate}
                      onChange={(e) => setCurrentRate(Number(e.target.value))}
                      className="mb-3 h-2 w-full appearance-none rounded-full bg-gray-200 outline-none accent-teal-600"
                    />
                    <input
                      type="number"
                      value={currentRate}
                      onChange={(e) => setCurrentRate(Number(e.target.value))}
                      min="1"
                      max="10"
                      step="0.1"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2 text-gray-900 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>

                  {/* New Rate */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="font-semibold text-gray-900">
                        New Interest Rate
                      </label>
                      <span className="font-bold text-teal-600">
                        {newRate.toFixed(2)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="0.1"
                      value={newRate}
                      onChange={(e) => setNewRate(Number(e.target.value))}
                      className="mb-3 h-2 w-full appearance-none rounded-full bg-gray-200 outline-none accent-teal-600"
                    />
                    <input
                      type="number"
                      value={newRate}
                      onChange={(e) => setNewRate(Number(e.target.value))}
                      min="1"
                      max="10"
                      step="0.1"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2 text-gray-900 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>

                  {/* Loan Balance */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="font-semibold text-gray-900">
                        Loan Balance
                      </label>
                      <span className="font-bold text-teal-600">
                        {formatCurrency(loanBalance)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100000"
                      max="2000000"
                      step="10000"
                      value={loanBalance}
                      onChange={(e) => setLoanBalance(Number(e.target.value))}
                      className="mb-3 h-2 w-full appearance-none rounded-full bg-gray-200 outline-none accent-teal-600"
                    />
                    <input
                      type="number"
                      value={loanBalance}
                      onChange={(e) => setLoanBalance(Number(e.target.value))}
                      min="100000"
                      max="2000000"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2 text-gray-900 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>

                  {/* Remaining Term */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="font-semibold text-gray-900">
                        Remaining Term
                      </label>
                      <span className="font-bold text-teal-600">
                        {remainingTerm} years
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={remainingTerm}
                      onChange={(e) => setRemainingTerm(Number(e.target.value))}
                      className="mb-3 h-2 w-full appearance-none rounded-full bg-gray-200 outline-none accent-teal-600"
                    />
                    <input
                      type="number"
                      value={remainingTerm}
                      onChange={(e) => setRemainingTerm(Number(e.target.value))}
                      min="1"
                      max="30"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2 text-gray-900 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>

                  {/* Results */}
                  <div className="space-y-4 rounded-xl bg-gray-50 p-6">
                    <div>
                      <p className="mb-1 text-sm font-semibold text-teal-600 uppercase tracking-widest">
                        Monthly Saving
                      </p>
                      <p className="text-3xl font-bold text-navy-900">
                        {formatCurrency(refinanceSavings.monthlySaving)}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold text-teal-600 uppercase tracking-widest">
                        Annual Saving
                      </p>
                      <p className="text-3xl font-bold text-navy-900">
                        {formatCurrency(refinanceSavings.annualSaving)}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold text-teal-600 uppercase tracking-widest">
                        Total Saving Over Term
                      </p>
                      <p className="text-3xl font-bold text-navy-900">
                        {formatCurrency(refinanceSavings.totalSaving)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">Disclaimer:</span> This
                  calculator provides indicative estimates only. Actual
                  repayments may vary depending on your specific circumstances,
                  fees, and lender policies. For an accurate quote, book a free
                  consultation with Karl.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-lg text-gray-600">
              Want an exact figure? Get personalised advice from Karl.
            </p>
            <a
              href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-teal-600 px-8 py-3 font-semibold text-white transition-all hover:bg-teal-700 active:scale-95"
            >
              Book a free call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
