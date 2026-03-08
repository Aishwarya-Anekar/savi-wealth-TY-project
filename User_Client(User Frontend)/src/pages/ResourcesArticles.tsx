import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const ResourcesArticles: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Personal Finance', 'Investment', 'Mutual Funds', 'Insurance', 'Tax Planning'];

  const articles: Article[] = [
    {
      id: 1,
      title: 'Accidents Happen. Are You Prepared?',
      excerpt: 'Life is unpredictable. One moment you\'re cruising along, feeling secure in your routine, and the next, an unexpected event can turn everything upside down.',
      author: 'NJ Publications',
      date: 'July 25, 2025',
      readTime: '8 min read',
      category: 'Personal Finance',
      image: '/images/articles/image1.jpg',
      slug: 'accidents-happen',
    },
    {
      id: 2,
      title: 'Emergency Fund: Your Financial Safety Net',
      excerpt: 'We all dream of building wealth, seeing our investments grow, and securing our financial future. But before you dive headfirst into the exciting world of investing, there\'s one crucial foundation you need to lay first: an emergency fund.',
      author: 'NJ Publications',
      date: 'July 25, 2025',
      readTime: '12 min read',
      category: 'Personal Finance',
      image: '/images/articles/image2.jpg',
      slug: 'emergency-fund',
    },
    {
      id: 3,
      title: 'Learning from Others\' Mistakes: The Smart Way to Invest',
      excerpt: 'In the world of investing, experience is often the best teacher. However, learning from your own mistakes can be expensive and time-consuming. The smarter approach? Learn from the mistakes of others who have walked the path before you.',
      author: 'NJ Publications',
      date: 'July 25, 2025',
      readTime: '15 min read',
      category: 'Investment',
      image: '/images/articles/image3.jpg',
      slug: 'learning-from-mistakes',
    },
    {
      id: 4,
      title: 'Avoid Common Mistakes While Buying Health Insurance',
      excerpt: 'When it comes to health insurance, all want the best care for themselves and their families. However, navigating the complex world of health insurance can be overwhelming, and it\'s easy to make costly mistakes that could leave you underinsured or overpaying.',
      author: 'NJ Publications',
      date: 'June 27, 2025',
      readTime: '10 min read',
      category: 'Insurance',
      image: '/images/articles/image4.jpg',
      slug: 'health-insurance-mistakes',
    },
    {
      id: 5,
      title: 'Mutual Fund Investment Strategies',
      excerpt: 'Understanding different mutual fund categories and investment strategies can help you build a diversified portfolio that aligns with your financial goals and risk tolerance.',
      author: 'NJ Publications',
      date: 'August 10, 2025',
      readTime: '12 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image5.jpg',
      slug: 'mutual-fund-strategies',
    },
    {
      id: 6,
      title: 'Tax Planning for Maximum Savings',
      excerpt: 'Effective tax planning can significantly impact your wealth accumulation. Learn about various tax-saving investment options and strategies to optimize your tax liability.',
      author: 'NJ Publications',
      date: 'August 5, 2025',
      readTime: '14 min read',
      category: 'Tax Planning',
      image: '/images/articles/image6.jpg',
      slug: 'tax-planning-strategies',
    },
    {
      id: 7,
      title: 'Building Wealth Through SIP',
      excerpt: 'Systematic Investment Plans (SIP) offer a disciplined approach to wealth creation. Discover how regular investments can help you achieve your long-term financial goals.',
      author: 'NJ Publications',
      date: 'July 30, 2025',
      readTime: '11 min read',
      category: 'Investment',
      image: '/images/articles/image7.jpg',
      slug: 'sip-wealth-building',
    },
    {
      id: 8,
      title: 'Understanding Market Volatility',
      excerpt: 'Market volatility is a natural part of investing. Learn how to navigate market ups and downs while staying focused on your long-term investment objectives.',
      author: 'NJ Publications',
      date: 'July 20, 2025',
      readTime: '13 min read',
      category: 'Investment',
      image: '/images/articles/image8.jpg',
      slug: 'market-volatility',
    },
    {
      id: 9,
      title: 'Portfolio Diversification Strategies',
      excerpt: 'Diversification is one of the most important principles of investing. Learn how to build a well-balanced portfolio that can weather market storms.',
      author: 'NJ Publications',
      date: 'July 15, 2025',
      readTime: '10 min read',
      category: 'Investment',
      image: '/images/articles/image9.jpg',
      slug: 'portfolio-diversification',
    },
    {
      id: 10,
      title: 'Understanding Life Insurance Needs',
      excerpt: 'Life insurance is a crucial component of financial planning. Learn how to determine the right coverage amount and type for your family\'s needs.',
      author: 'NJ Publications',
      date: 'July 10, 2025',
      readTime: '9 min read',
      category: 'Insurance',
      image: '/images/articles/image10.jpg',
      slug: 'life-insurance-needs',
    },
    {
      id: 11,
      title: 'Retirement Planning in Your 30s',
      excerpt: 'Starting retirement planning early gives you a significant advantage. Learn the key strategies for building retirement wealth in your thirties.',
      author: 'NJ Publications',
      date: 'July 5, 2025',
      readTime: '12 min read',
      category: 'Personal Finance',
      image: '/images/articles/image11.jpg',
      slug: 'retirement-planning-30s',
    },
    {
      id: 12,
      title: 'Fixed Deposits vs Mutual Funds',
      excerpt: 'Compare the benefits and drawbacks of traditional fixed deposits versus mutual fund investments for your savings goals.',
      author: 'NJ Publications',
      date: 'June 30, 2025',
      readTime: '8 min read',
      category: 'Investment',
      image: '/images/articles/image12.jpg',
      slug: 'fd-vs-mutual-funds',
    },
    {
      id: 13,
      title: 'Understanding Equity Mutual Funds',
      excerpt: 'Equity mutual funds can be powerful wealth creation tools. Learn about different types of equity funds and how to choose the right ones.',
      author: 'NJ Publications',
      date: 'June 25, 2025',
      readTime: '11 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image13.jpg',
      slug: 'equity-mutual-funds',
    },
    {
      id: 14,
      title: 'Debt Fund Investment Guide',
      excerpt: 'Debt funds offer stability and regular income. Understand the different categories of debt funds and their risk-return profiles.',
      author: 'NJ Publications',
      date: 'June 20, 2025',
      readTime: '10 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image14.jpg',
      slug: 'debt-fund-guide',
    },
    {
      id: 15,
      title: 'Goal-Based Financial Planning',
      excerpt: 'Align your investments with your life goals. Learn how to create a comprehensive financial plan that addresses all your objectives.',
      author: 'NJ Publications',
      date: 'June 15, 2025',
      readTime: '13 min read',
      category: 'Personal Finance',
      image: '/images/articles/image15.jpg',
      slug: 'goal-based-planning',
    },
    {
      id: 16,
      title: 'Understanding Risk in Investments',
      excerpt: 'Every investment carries risk. Learn how to assess, measure, and manage investment risks effectively.',
      author: 'NJ Publications',
      date: 'June 10, 2025',
      readTime: '9 min read',
      category: 'Investment',
      image: '/images/articles/image16.jpg',
      slug: 'investment-risk-management',
    },
    {
      id: 17,
      title: 'Child Education Planning',
      excerpt: 'Education costs are rising rapidly. Start planning early to ensure your child\'s educational dreams don\'t become financial nightmares.',
      author: 'NJ Publications',
      date: 'June 5, 2025',
      readTime: '11 min read',
      category: 'Personal Finance',
      image: '/images/articles/image17.jpg',
      slug: 'child-education-planning',
    },
    {
      id: 18,
      title: 'Home Loan vs Rent: Making the Right Choice',
      excerpt: 'Should you buy or rent? Analyze the financial implications of both options to make an informed decision.',
      author: 'NJ Publications',
      date: 'May 30, 2025',
      readTime: '10 min read',
      category: 'Personal Finance',
      image: '/images/articles/image18.jpg',
      slug: 'buy-vs-rent',
    },
    {
      id: 19,
      title: 'Understanding ELSS Funds',
      excerpt: 'Equity Linked Savings Schemes offer tax benefits along with wealth creation potential. Learn how to maximize their benefits.',
      author: 'NJ Publications',
      date: 'May 25, 2025',
      readTime: '8 min read',
      category: 'Tax Planning',
      image: '/images/articles/image19.jpg',
      slug: 'elss-funds-guide',
    },
    {
      id: 20,
      title: 'Building Credit Score',
      excerpt: 'A good credit score opens doors to better financial opportunities. Learn how to build and maintain an excellent credit score.',
      author: 'NJ Publications',
      date: 'May 20, 2025',
      readTime: '9 min read',
      category: 'Personal Finance',
      image: '/images/articles/image20.jpg',
      slug: 'building-credit-score',
    },
    {
      id: 21,
      title: 'International Diversification',
      excerpt: 'Expand your investment horizon beyond domestic markets. Learn about international investment opportunities and their benefits.',
      author: 'NJ Publications',
      date: 'May 15, 2025',
      readTime: '12 min read',
      category: 'Investment',
      image: '/images/articles/image21.jpg',
      slug: 'international-diversification',
    },
    {
      id: 22,
      title: 'Understanding Market Cycles',
      excerpt: 'Markets move in cycles. Understanding these patterns can help you make better investment decisions.',
      author: 'NJ Publications',
      date: 'May 10, 2025',
      readTime: '11 min read',
      category: 'Investment',
      image: '/images/articles/image22.jpg',
      slug: 'market-cycles',
    },
    {
      id: 23,
      title: 'Health Insurance Portability',
      excerpt: 'Learn about health insurance portability rules and how to switch insurance providers without losing benefits.',
      author: 'NJ Publications',
      date: 'May 5, 2025',
      readTime: '7 min read',
      category: 'Insurance',
      image: '/images/articles/image23.jpg',
      slug: 'health-insurance-portability',
    },
    {
      id: 24,
      title: 'Women and Financial Planning',
      excerpt: 'Women face unique financial challenges. Learn strategies for building financial independence and security.',
      author: 'NJ Publications',
      date: 'April 30, 2025',
      readTime: '10 min read',
      category: 'Personal Finance',
      image: '/images/articles/image24.jpg',
      slug: 'women-financial-planning',
    },
    {
      id: 25,
      title: 'Understanding Inflation Impact',
      excerpt: 'Inflation erodes purchasing power over time. Learn how to protect your investments from inflation\'s impact.',
      author: 'NJ Publications',
      date: 'April 25, 2025',
      readTime: '9 min read',
      category: 'Investment',
      image: '/images/articles/image25.jpg',
      slug: 'inflation-impact',
    },
    {
      id: 26,
      title: 'Systematic Withdrawal Plans',
      excerpt: 'SWPs provide regular income from your mutual fund investments. Learn how to use them effectively.',
      author: 'NJ Publications',
      date: 'April 20, 2025',
      readTime: '8 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image26.jpg',
      slug: 'systematic-withdrawal-plans',
    },
    {
      id: 27,
      title: 'Estate Planning Basics',
      excerpt: 'Ensure your wealth passes to your loved ones smoothly. Learn the fundamentals of estate planning.',
      author: 'NJ Publications',
      date: 'April 15, 2025',
      readTime: '12 min read',
      category: 'Personal Finance',
      image: '/images/articles/image27.jpg',
      slug: 'estate-planning-basics',
    },
    {
      id: 28,
      title: 'Understanding Fund Performance',
      excerpt: 'Learn how to analyze mutual fund performance beyond just returns. Understand risk-adjusted metrics and benchmarking.',
      author: 'NJ Publications',
      date: 'April 10, 2025',
      readTime: '10 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image28.jpg',
      slug: 'fund-performance-analysis',
    },
    {
      id: 29,
      title: 'Digital Gold Investment',
      excerpt: 'Gold has always been a preferred investment. Explore modern ways to invest in gold digitally.',
      author: 'NJ Publications',
      date: 'April 5, 2025',
      readTime: '8 min read',
      category: 'Investment',
      image: '/images/articles/image29.jpg',
      slug: 'digital-gold-investment',
    },
    {
      id: 30,
      title: 'Understanding Asset Allocation',
      excerpt: 'Asset allocation is key to investment success. Learn how to distribute your investments across different asset classes.',
      author: 'NJ Publications',
      date: 'March 30, 2025',
      readTime: '11 min read',
      category: 'Investment',
      image: '/images/articles/image30.jpg',
      slug: 'asset-allocation-guide',
    },
    {
      id: 31,
      title: 'Term Insurance vs Whole Life',
      excerpt: 'Compare term insurance and whole life insurance to choose the right coverage for your needs.',
      author: 'NJ Publications',
      date: 'March 25, 2025',
      readTime: '9 min read',
      category: 'Insurance',
      image: '/images/articles/image31.jpg',
      slug: 'term-vs-whole-life',
    },
    {
      id: 32,
      title: 'Behavioral Finance Insights',
      excerpt: 'Understand how psychology affects investment decisions and learn to overcome behavioral biases.',
      author: 'NJ Publications',
      date: 'March 20, 2025',
      readTime: '12 min read',
      category: 'Investment',
      image: '/images/articles/image32.jpg',
      slug: 'behavioral-finance',
    },
    {
      id: 33,
      title: 'NPS: National Pension System',
      excerpt: 'NPS offers tax benefits and retirement planning. Learn how to make the most of this government scheme.',
      author: 'NJ Publications',
      date: 'March 15, 2025',
      readTime: '10 min read',
      category: 'Tax Planning',
      image: '/images/articles/image33.jpg',
      slug: 'nps-guide',
    },
    {
      id: 34,
      title: 'Understanding Bond Investments',
      excerpt: 'Bonds provide steady income and portfolio stability. Learn about different types of bonds and their characteristics.',
      author: 'NJ Publications',
      date: 'March 10, 2025',
      readTime: '11 min read',
      category: 'Investment',
      image: '/images/articles/image34.jpg',
      slug: 'bond-investments',
    },
    {
      id: 35,
      title: 'Financial Planning for Millennials',
      excerpt: 'Millennials face unique financial challenges. Learn strategies tailored for this generation\'s needs.',
      author: 'NJ Publications',
      date: 'March 5, 2025',
      readTime: '10 min read',
      category: 'Personal Finance',
      image: '/images/articles/image35.jpg',
      slug: 'millennial-financial-planning',
    },
    {
      id: 36,
      title: 'Understanding REITs',
      excerpt: 'Real Estate Investment Trusts offer exposure to real estate without direct property ownership. Learn the basics.',
      author: 'NJ Publications',
      date: 'February 28, 2025',
      readTime: '9 min read',
      category: 'Investment',
      image: '/images/articles/image36.jpg',
      slug: 'reits-investment-guide',
    },
    {
      id: 37,
      title: 'Credit Card Management',
      excerpt: 'Credit cards can be powerful financial tools when used wisely. Learn best practices for credit card management.',
      author: 'NJ Publications',
      date: 'February 25, 2025',
      readTime: '8 min read',
      category: 'Personal Finance',
      image: '/images/articles/image37.jpg',
      slug: 'credit-card-management',
    },
    {
      id: 38,
      title: 'Understanding Sectoral Funds',
      excerpt: 'Sectoral funds focus on specific industries. Learn when and how to include them in your portfolio.',
      author: 'NJ Publications',
      date: 'February 20, 2025',
      readTime: '9 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image38.jpg',
      slug: 'sectoral-funds-guide',
    },
    {
      id: 39,
      title: 'Financial Independence Strategies',
      excerpt: 'Achieve financial independence and retire early. Learn the FIRE movement principles and strategies.',
      author: 'NJ Publications',
      date: 'February 15, 2025',
      readTime: '13 min read',
      category: 'Personal Finance',
      image: '/images/articles/image39.jpg',
      slug: 'financial-independence',
    },
    {
      id: 40,
      title: 'Understanding Market Indicators',
      excerpt: 'Learn to read market indicators and economic signals that can guide your investment decisions.',
      author: 'NJ Publications',
      date: 'February 10, 2025',
      readTime: '11 min read',
      category: 'Investment',
      image: '/images/articles/image40.jpg',
      slug: 'market-indicators',
    },
    {
      id: 41,
      title: 'Travel Insurance Guide',
      excerpt: 'Protect yourself from travel-related financial risks. Learn about different types of travel insurance coverage.',
      author: 'NJ Publications',
      date: 'February 5, 2025',
      readTime: '7 min read',
      category: 'Insurance',
      image: '/images/articles/image41.jpg',
      slug: 'travel-insurance-guide',
    },
    {
      id: 42,
      title: 'Understanding Fund Categories',
      excerpt: 'SEBI has categorized mutual funds for better clarity. Understand different fund categories and their characteristics.',
      author: 'NJ Publications',
      date: 'January 30, 2025',
      readTime: '10 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image42.jpg',
      slug: 'fund-categories',
    },
    {
      id: 43,
      title: 'Budgeting for Beginners',
      excerpt: 'Master the art of budgeting to take control of your finances. Learn practical budgeting techniques and tools.',
      author: 'NJ Publications',
      date: 'January 25, 2025',
      readTime: '8 min read',
      category: 'Personal Finance',
      image: '/images/articles/image43.jpg',
      slug: 'budgeting-beginners',
    },
    {
      id: 44,
      title: 'Understanding Dollar Cost Averaging',
      excerpt: 'Dollar cost averaging can reduce investment risk. Learn how this strategy works and when to use it.',
      author: 'NJ Publications',
      date: 'January 20, 2025',
      readTime: '9 min read',
      category: 'Investment',
      image: '/images/articles/image44.jpg',
      slug: 'dollar-cost-averaging',
    },
    {
      id: 45,
      title: 'Motor Insurance Essentials',
      excerpt: 'Motor insurance is mandatory but choosing the right coverage is crucial. Learn about different types of motor insurance.',
      author: 'NJ Publications',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Insurance',
      image: '/images/articles/image45.jpg',
      slug: 'motor-insurance-guide',
    },
    {
      id: 46,
      title: 'Understanding Index Funds',
      excerpt: 'Index funds offer low-cost diversification. Learn how they work and their role in a portfolio.',
      author: 'NJ Publications',
      date: 'January 10, 2025',
      readTime: '9 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image46.jpg',
      slug: 'index-funds-guide',
    },
    {
      id: 47,
      title: 'Financial Planning After Marriage',
      excerpt: 'Marriage brings financial responsibilities. Learn how to plan finances as a couple and achieve shared goals.',
      author: 'NJ Publications',
      date: 'January 5, 2025',
      readTime: '11 min read',
      category: 'Personal Finance',
      image: '/images/articles/image47.jpg',
      slug: 'financial-planning-marriage',
    },
    {
      id: 48,
      title: 'Understanding Commodity Investments',
      excerpt: 'Commodities can diversify your portfolio. Learn about different ways to invest in commodities.',
      author: 'NJ Publications',
      date: 'December 30, 2024',
      readTime: '10 min read',
      category: 'Investment',
      image: '/images/articles/image48.jpg',
      slug: 'commodity-investments',
    },
    {
      id: 49,
      title: 'Senior Citizen Investment Options',
      excerpt: 'Senior citizens have specific investment needs. Learn about suitable investment options for retirees.',
      author: 'NJ Publications',
      date: 'December 25, 2024',
      readTime: '10 min read',
      category: 'Personal Finance',
      image: '/images/articles/image49.jpg',
      slug: 'senior-citizen-investments',
    },
    {
      id: 50,
      title: 'Understanding ETFs',
      excerpt: 'Exchange Traded Funds combine features of mutual funds and stocks. Learn how ETFs work and their benefits.',
      author: 'NJ Publications',
      date: 'December 20, 2024',
      readTime: '9 min read',
      category: 'Investment',
      image: '/images/articles/image50.jpg',
      slug: 'etf-investment-guide',
    },
    {
      id: 51,
      title: 'Home Insurance Basics',
      excerpt: 'Protect your biggest asset with adequate home insurance. Learn about different types of home insurance coverage.',
      author: 'NJ Publications',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Insurance',
      image: '/images/articles/image51.jpg',
      slug: 'home-insurance-basics',
    },
    {
      id: 52,
      title: 'Understanding Hybrid Funds',
      excerpt: 'Hybrid funds invest in both equity and debt. Learn about different types of hybrid funds and their benefits.',
      author: 'NJ Publications',
      date: 'December 10, 2024',
      readTime: '9 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image52.jpg',
      slug: 'hybrid-funds-guide',
    },
    {
      id: 53,
      title: 'Financial Planning for Freelancers',
      excerpt: 'Freelancers face irregular income challenges. Learn strategies for managing finances with variable income.',
      author: 'NJ Publications',
      date: 'December 5, 2024',
      readTime: '11 min read',
      category: 'Personal Finance',
      image: '/images/articles/image53.jpg',
      slug: 'freelancer-financial-planning',
    },
    {
      id: 54,
      title: 'Understanding Currency Risk',
      excerpt: 'International investments carry currency risk. Learn how to understand and manage currency exposure.',
      author: 'NJ Publications',
      date: 'November 30, 2024',
      readTime: '10 min read',
      category: 'Investment',
      image: '/images/articles/image54.jpg',
      slug: 'currency-risk-management',
    },
    {
      id: 55,
      title: 'Critical Illness Insurance',
      excerpt: 'Critical illness can be financially devastating. Learn about critical illness insurance and its importance.',
      author: 'NJ Publications',
      date: 'November 25, 2024',
      readTime: '9 min read',
      category: 'Insurance',
      image: '/images/articles/image55.jpg',
      slug: 'critical-illness-insurance',
    },
    {
      id: 56,
      title: 'Understanding Fund Managers',
      excerpt: 'Fund managers play a crucial role in mutual fund performance. Learn how to evaluate fund management quality.',
      author: 'NJ Publications',
      date: 'November 20, 2024',
      readTime: '8 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image56.jpg',
      slug: 'fund-managers-evaluation',
    },
    {
      id: 57,
      title: 'Debt Management Strategies',
      excerpt: 'Manage and eliminate debt effectively. Learn strategies for becoming debt-free and staying that way.',
      author: 'NJ Publications',
      date: 'November 15, 2024',
      readTime: '10 min read',
      category: 'Personal Finance',
      image: '/images/articles/image57.jpg',
      slug: 'debt-management-strategies',
    },
    {
      id: 58,
      title: 'Understanding Small Cap Funds',
      excerpt: 'Small cap funds offer high growth potential with higher risk. Learn when and how to invest in them.',
      author: 'NJ Publications',
      date: 'November 10, 2024',
      readTime: '9 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image58.jpg',
      slug: 'small-cap-funds',
    },
    {
      id: 59,
      title: 'Financial Planning for Parents',
      excerpt: 'Parenthood brings new financial responsibilities. Learn how to plan for your growing family\'s needs.',
      author: 'NJ Publications',
      date: 'November 5, 2024',
      readTime: '11 min read',
      category: 'Personal Finance',
      image: '/images/articles/image59.jpg',
      slug: 'financial-planning-parents',
    },
    {
      id: 60,
      title: 'Understanding Liquidity Risk',
      excerpt: 'Liquidity risk can affect your investments. Learn how to assess and manage liquidity in your portfolio.',
      author: 'NJ Publications',
      date: 'October 30, 2024',
      readTime: '8 min read',
      category: 'Investment',
      image: '/images/articles/image60.jpg',
      slug: 'liquidity-risk-management',
    },
    {
      id: 61,
      title: 'Personal Accident Insurance',
      excerpt: 'Accidents can happen anytime. Learn about personal accident insurance and its coverage benefits.',
      author: 'NJ Publications',
      date: 'October 25, 2024',
      readTime: '7 min read',
      category: 'Insurance',
      image: '/images/articles/image61.jpg',
      slug: 'personal-accident-insurance',
    },
    {
      id: 62,
      title: 'Understanding Large Cap Funds',
      excerpt: 'Large cap funds offer stability and steady returns. Learn about their characteristics and role in portfolios.',
      author: 'NJ Publications',
      date: 'October 20, 2024',
      readTime: '8 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image62.jpg',
      slug: 'large-cap-funds',
    },
    {
      id: 63,
      title: 'Financial Planning for Entrepreneurs',
      excerpt: 'Entrepreneurs face unique financial challenges. Learn strategies for managing business and personal finances.',
      author: 'NJ Publications',
      date: 'October 15, 2024',
      readTime: '12 min read',
      category: 'Personal Finance',
      image: '/images/articles/image63.jpg',
      slug: 'entrepreneur-financial-planning',
    },
    {
      id: 64,
      title: 'Understanding Interest Rate Risk',
      excerpt: 'Interest rate changes affect bond and debt fund returns. Learn how to manage interest rate risk.',
      author: 'NJ Publications',
      date: 'October 10, 2024',
      readTime: '9 min read',
      category: 'Investment',
      image: '/images/articles/image64.jpg',
      slug: 'interest-rate-risk',
    },
    {
      id: 65,
      title: 'Group Insurance Benefits',
      excerpt: 'Group insurance offers cost-effective coverage. Learn about group insurance benefits and limitations.',
      author: 'NJ Publications',
      date: 'October 5, 2024',
      readTime: '8 min read',
      category: 'Insurance',
      image: '/images/articles/image65.jpg',
      slug: 'group-insurance-benefits',
    },
    {
      id: 66,
      title: 'Understanding Mid Cap Funds',
      excerpt: 'Mid cap funds balance growth and stability. Learn about their characteristics and investment potential.',
      author: 'NJ Publications',
      date: 'September 30, 2024',
      readTime: '9 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image66.jpg',
      slug: 'mid-cap-funds',
    },
    {
      id: 67,
      title: 'Financial Planning for Singles',
      excerpt: 'Single individuals have unique financial planning needs. Learn strategies for building wealth independently.',
      author: 'NJ Publications',
      date: 'September 25, 2024',
      readTime: '10 min read',
      category: 'Personal Finance',
      image: '/images/articles/image67.jpg',
      slug: 'financial-planning-singles',
    },
    {
      id: 68,
      title: 'Understanding Credit Risk',
      excerpt: 'Credit risk affects debt investments. Learn how to assess and manage credit risk in your portfolio.',
      author: 'NJ Publications',
      date: 'September 20, 2024',
      readTime: '8 min read',
      category: 'Investment',
      image: '/images/articles/image68.jpg',
      slug: 'credit-risk-management',
    },
    {
      id: 69,
      title: 'Disability Insurance Importance',
      excerpt: 'Disability can affect earning capacity. Learn about disability insurance and its role in financial planning.',
      author: 'NJ Publications',
      date: 'September 15, 2024',
      readTime: '9 min read',
      category: 'Insurance',
      image: '/images/articles/image69.jpg',
      slug: 'disability-insurance',
    },
    {
      id: 70,
      title: 'Understanding Multi Cap Funds',
      excerpt: 'Multi cap funds invest across market capitalizations. Learn about their flexibility and benefits.',
      author: 'NJ Publications',
      date: 'September 10, 2024',
      readTime: '8 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image70.jpg',
      slug: 'multi-cap-funds',
    },
    {
      id: 71,
      title: 'Financial Planning in Inflation',
      excerpt: 'High inflation affects financial planning. Learn strategies to protect your wealth during inflationary periods.',
      author: 'NJ Publications',
      date: 'September 5, 2024',
      readTime: '10 min read',
      category: 'Personal Finance',
      image: '/images/articles/image71.jpg',
      slug: 'financial-planning-inflation',
    },
    {
      id: 72,
      title: 'Understanding Concentration Risk',
      excerpt: 'Concentration risk can hurt portfolio performance. Learn how to identify and manage concentration risk.',
      author: 'NJ Publications',
      date: 'August 30, 2024',
      readTime: '9 min read',
      category: 'Investment',
      image: '/images/articles/image72.jpg',
      slug: 'concentration-risk',
    },
    {
      id: 73,
      title: 'Key Person Insurance',
      excerpt: 'Protect your business from key person loss. Learn about key person insurance and its importance.',
      author: 'NJ Publications',
      date: 'August 25, 2024',
      readTime: '7 min read',
      category: 'Insurance',
      image: '/images/articles/image73.jpg',
      slug: 'key-person-insurance',
    },
    {
      id: 74,
      title: 'Understanding Value Funds',
      excerpt: 'Value funds invest in undervalued stocks. Learn about value investing principles and fund selection.',
      author: 'NJ Publications',
      date: 'August 20, 2024',
      readTime: '9 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image74.jpg',
      slug: 'value-funds-guide',
    },
    {
      id: 75,
      title: 'Financial Planning for Retirement',
      excerpt: 'Retirement planning requires careful consideration. Learn comprehensive strategies for a comfortable retirement.',
      author: 'NJ Publications',
      date: 'August 15, 2024',
      readTime: '13 min read',
      category: 'Personal Finance',
      image: '/images/articles/image75.jpg',
      slug: 'retirement-planning-guide',
    },
    {
      id: 76,
      title: 'Understanding Growth Funds',
      excerpt: 'Growth funds focus on capital appreciation. Learn about growth investing and fund characteristics.',
      author: 'NJ Publications',
      date: 'August 10, 2024',
      readTime: '8 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image76.jpg',
      slug: 'growth-funds-guide',
    },
    {
      id: 77,
      title: 'Financial Planning for Job Loss',
      excerpt: 'Job loss can be financially devastating. Learn how to prepare for and manage unemployment periods.',
      author: 'NJ Publications',
      date: 'August 5, 2024',
      readTime: '10 min read',
      category: 'Personal Finance',
      image: '/images/articles/image77.jpg',
      slug: 'financial-planning-job-loss',
    },
    {
      id: 78,
      title: 'Understanding Momentum Funds',
      excerpt: 'Momentum funds invest in trending stocks. Learn about momentum investing strategies and risks.',
      author: 'NJ Publications',
      date: 'July 30, 2024',
      readTime: '9 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image78.jpg',
      slug: 'momentum-funds',
    },
    {
      id: 79,
      title: 'Financial Planning for Divorce',
      excerpt: 'Divorce has significant financial implications. Learn how to protect your financial interests during divorce.',
      author: 'NJ Publications',
      date: 'July 25, 2024',
      readTime: '11 min read',
      category: 'Personal Finance',
      image: '/images/articles/image79.jpg',
      slug: 'financial-planning-divorce',
    },
    {
      id: 80,
      title: 'Understanding Thematic Funds',
      excerpt: 'Thematic funds invest based on specific themes. Learn about thematic investing opportunities and risks.',
      author: 'NJ Publications',
      date: 'July 20, 2024',
      readTime: '8 min read',
      category: 'Mutual Funds',
      image: '/images/articles/image80.jpg',
      slug: 'thematic-funds-guide',
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Articles - Resources - SaviWealth"
        description="Read our latest financial articles and expert insights on investment, personal finance, and wealth management."
        keywords="financial articles, investment insights, personal finance, wealth management"
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Financial Articles
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Stay informed with our latest insights on finance, investment, and wealth management
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-1" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      
                      <Link
                        to={`/resources/articles/${article.slug}`}
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                      >
                        Read More
                        <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Load More Section */}
        <section className="py-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Load More Articles
          </motion.button>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-primary-50 dark:bg-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Subscribe to our newsletter for the latest financial insights and articles
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {/* <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200">
                  Subscribe
                </button> */}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResourcesArticles;


