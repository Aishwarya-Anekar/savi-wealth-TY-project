import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Carousel from '../components/Carousel';
import ArticleCard from '../components/ArticleCard';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Real article data from SaviWealth website
  const articles = {
    'accidents-happen': {
      title: 'Accidents Happen. Are You Prepared?',
      excerpt: 'Life is unpredictable. One moment you\'re cruising along, feeling secure in your routine, and the next, an unexpected event can turn everything upside down.',
      content: `
        <p>Life is unpredictable. One moment you're cruising along, feeling secure in your routine, and the next, an unexpected event can turn everything upside down. Whether it's a sudden illness, job loss, natural disaster, or any other unforeseen circumstance, these "accidents" of life can have devastating financial consequences if you're not prepared.</p>
        
        <p>The reality is that most people live paycheck to paycheck, with little to no emergency savings. According to various financial surveys, a significant percentage of individuals would struggle to cover even a $1,000 emergency expense without borrowing money or going into debt. This lack of financial preparedness can turn a temporary setback into a long-term financial crisis.</p>
        
        <h3>The Importance of Emergency Preparedness</h3>
        <p>Financial preparedness isn't just about having money in the bank – it's about having peace of mind. When you're prepared for life's unexpected events, you can face challenges with confidence rather than panic. You can make rational decisions instead of desperate ones.</p>
        
        <p>An emergency fund serves as your financial safety net, providing you with the resources you need to weather unexpected storms without derailing your long-term financial goals. It's the foundation upon which all other financial planning is built.</p>
        
        <h3>Building Your Emergency Fund</h3>
        <p>The general recommendation is to have 3-6 months' worth of living expenses saved in an easily accessible account. However, the exact amount you need depends on various factors:</p>
        <ul>
          <li><strong>Job stability</strong>: If you work in a volatile industry or have irregular income, you might need a larger emergency fund.</li>
          <li><strong>Family size</strong>: More dependents mean higher potential emergency expenses.</li>
          <li><strong>Health considerations</strong>: Chronic health conditions or lack of comprehensive insurance might require additional savings.</li>
          <li><strong>Home ownership</strong>: Property owners face additional potential expenses like major repairs.</li>
        </ul>
        
        <h3>Where to Keep Your Emergency Fund</h3>
        <p>Your emergency fund should be easily accessible but separate from your regular checking account to avoid the temptation of using it for non-emergencies. Consider these options:</p>
        <ul>
          <li><strong>High-yield savings accounts</strong>: These offer better interest rates than traditional savings accounts while maintaining liquidity.</li>
          <li><strong>Money market accounts</strong>: Often provide higher interest rates and may include check-writing privileges.</li>
          <li><strong>Short-term CDs</strong>: While less liquid, they can offer higher returns for a portion of your emergency fund.</li>
        </ul>
        
        <h3>Beyond the Emergency Fund</h3>
        <p>While an emergency fund is crucial, comprehensive financial preparedness goes beyond just saving money:</p>
        <ul>
          <li><strong>Insurance coverage</strong>: Ensure you have adequate health, disability, and property insurance.</li>
          <li><strong>Estate planning</strong>: Have a will and other necessary documents in place.</li>
          <li><strong>Debt management</strong>: Keep debt levels manageable to maintain financial flexibility.</li>
          <li><strong>Skill development</strong>: Continuously improve your skills to enhance job security.</li>
        </ul>
        
        <h3>Starting Small, Thinking Big</h3>
        <p>If saving 3-6 months of expenses seems overwhelming, start small. Even $500 can help you avoid going into debt for minor emergencies. Set up automatic transfers to your emergency fund, even if it's just $25 per week. The key is to start and be consistent.</p>
        
        <p>Remember, building financial security is a marathon, not a sprint. Every dollar you save brings you one step closer to true financial peace of mind.</p>
        
        <h3>Conclusion</h3>
        <p>Accidents happen – that's a fact of life. But whether these accidents become financial disasters depends largely on how well you've prepared. By building an emergency fund and maintaining comprehensive financial preparedness, you can face life's uncertainties with confidence.</p>
        
        <p>Don't wait for an emergency to realize the importance of being prepared. Start building your financial safety net today, because when accidents happen, you'll be ready.</p>
      `,
      date: 'Friday, July 25 2025',
      readTime: '8 min read',
      image: '/images/articles/image1.jpg',
      category: 'Personal Finance',
      author: 'NJ Publications'
    },
    'emergency-fund': {
      title: 'Emergency Fund: Your Financial Safety Net',
      excerpt: 'We all dream of building wealth, seeing our investments grow, and securing our financial future. But before you dive headfirst into the exciting world of investing, there\'s one crucial foundation you need to lay first: an emergency fund.',
      content: `
        <p>We all dream of building wealth, seeing our investments grow, and securing our financial future. But before you dive headfirst into the exciting world of investing, there's one crucial foundation you need to lay first: an emergency fund.</p>
        
        <p>Think of an emergency fund as your financial safety net – a buffer that protects you from life's unexpected curveballs. It's not the most glamorous part of financial planning, but it's arguably the most important.</p>
        
        <h3>What is an Emergency Fund?</h3>
        <p>An emergency fund is a readily accessible pool of money set aside specifically for unexpected expenses or financial emergencies. These might include:</p>
        <ul>
          <li>Sudden job loss or reduction in income</li>
          <li>Major medical expenses not covered by insurance</li>
          <li>Urgent home or car repairs</li>
          <li>Family emergencies requiring travel</li>
          <li>Natural disasters or other unforeseen events</li>
        </ul>
        
        <p>The key characteristics of an emergency fund are liquidity and accessibility. This money should be available when you need it, without penalties or delays.</p>
        
        <h3>Why Do You Need an Emergency Fund?</h3>
        
        <h4>1. Prevents Debt Accumulation</h4>
        <p>Without an emergency fund, unexpected expenses often lead to credit card debt or loans. This debt can quickly spiral out of control with high interest rates, making your financial situation worse.</p>
        
        <h4>2. Provides Peace of Mind</h4>
        <p>Knowing you have a financial cushion reduces stress and anxiety about money. This peace of mind allows you to make better financial decisions and sleep better at night.</p>
        
        <h4>3. Protects Your Investments</h4>
        <p>With an emergency fund in place, you won't need to liquidate your investments during market downturns or interrupt your long-term investment strategy to handle emergencies.</p>
        
        <h4>4. Maintains Your Lifestyle</h4>
        <p>An emergency fund helps you maintain your standard of living during temporary setbacks, giving you time to adjust and recover without drastic lifestyle changes.</p>
        
        <h3>How Much Should You Save?</h3>
        <p>The traditional advice is to save 3-6 months' worth of living expenses. However, the right amount for you depends on several factors:</p>
        
        <h4>Factors to Consider:</h4>
        <ul>
          <li><strong>Job security</strong>: Those in stable employment might need less, while freelancers or those in volatile industries should save more</li>
          <li><strong>Family size</strong>: More dependents typically mean higher potential emergency costs</li>
          <li><strong>Health status</strong>: Chronic conditions or poor health might require larger emergency funds</li>
          <li><strong>Insurance coverage</strong>: Better insurance can reduce the need for emergency savings</li>
          <li><strong>Other income sources</strong>: Multiple income streams might reduce the required emergency fund size</li>
        </ul>
        
        <h4>A Practical Approach:</h4>
        <ul>
          <li><strong>Minimum</strong>: $1,000 for basic emergencies</li>
          <li><strong>Starter goal</strong>: 1 month of expenses</li>
          <li><strong>Standard goal</strong>: 3-6 months of expenses</li>
          <li><strong>Enhanced goal</strong>: 6-12 months for high-risk situations</li>
        </ul>
        
        <h3>Where to Keep Your Emergency Fund</h3>
        <p>Your emergency fund should be:</p>
        <ul>
          <li><strong>Liquid</strong>: Easily accessible without penalties</li>
          <li><strong>Safe</strong>: Protected from market volatility</li>
          <li><strong>Separate</strong>: Not mixed with your regular spending money</li>
        </ul>
        
        <h4>Best Options:</h4>
        <ol>
          <li><strong>High-yield savings accounts</strong>: Offer better interest rates while maintaining full liquidity</li>
          <li><strong>Money market accounts</strong>: Often provide higher yields and may include limited check-writing</li>
          <li><strong>Short-term CDs</strong>: For a portion of your fund, if you can afford the reduced liquidity</li>
        </ol>
        
        <h4>Avoid These Options:</h4>
        <ul>
          <li>Regular checking accounts (too tempting to spend)</li>
          <li>Stock market investments (too volatile)</li>
          <li>Long-term CDs (not liquid enough)</li>
          <li>Retirement accounts (penalties for early withdrawal)</li>
        </ul>
        
        <h3>Building Your Emergency Fund</h3>
        
        <h4>Step 1: Set a Clear Goal</h4>
        <p>Determine your target amount based on your monthly expenses and risk factors. Having a specific goal makes it easier to stay motivated.</p>
        
        <h4>Step 2: Start Small</h4>
        <p>If your goal seems overwhelming, start with a smaller target like $500 or $1,000. Achieving smaller goals builds momentum and confidence.</p>
        
        <h4>Step 3: Automate Your Savings</h4>
        <p>Set up automatic transfers from your checking account to your emergency fund. Treat it like a non-negotiable bill.</p>
        
        <h4>Step 4: Use Windfalls Wisely</h4>
        <p>Direct tax refunds, bonuses, or other unexpected money toward your emergency fund until you reach your goal.</p>
        
        <h4>Step 5: Cut Unnecessary Expenses</h4>
        <p>Review your budget and redirect money from non-essential spending to your emergency fund.</p>
        
        <h3>Maintaining Your Emergency Fund</h3>
        
        <h4>When to Use It</h4>
        <p>Only use your emergency fund for true emergencies – unexpected, necessary, and urgent expenses. A vacation or new gadget doesn't qualify.</p>
        
        <h4>Replenishing After Use</h4>
        <p>If you need to use your emergency fund, make replenishing it a top priority. Adjust your budget temporarily to rebuild it as quickly as possible.</p>
        
        <h4>Regular Reviews</h4>
        <p>Review your emergency fund annually. As your income and expenses change, you may need to adjust the target amount.</p>
        
        <h3>Common Mistakes to Avoid</h3>
        
        <h4>1. Not Starting</h4>
        <p>The biggest mistake is never beginning. Even small amounts add up over time.</p>
        
        <h4>2. Using It for Non-Emergencies</h4>
        <p>Maintain discipline about what constitutes a true emergency.</p>
        
        <h4>3. Keeping Too Much</h4>
        <p>While having an emergency fund is crucial, keeping excessive amounts in low-yield accounts means missing out on investment growth.</p>
        
        <h4>4. Not Adjusting for Life Changes</h4>
        <p>Major life events (marriage, children, home purchase) should trigger a review of your emergency fund needs.</p>
        
        <h3>The Bottom Line</h3>
        <p>An emergency fund isn't just about money – it's about freedom, security, and peace of mind. It's the foundation that allows you to take calculated risks, pursue opportunities, and build wealth without fear.</p>
        
        <p>Yes, it might seem boring compared to investing in exciting stocks or cryptocurrencies. But this "boring" safety net is what separates those who build lasting wealth from those who remain trapped in cycles of financial stress.</p>
        
        <p>Start building your emergency fund today. Your future self will thank you when life throws its inevitable curveballs your way.</p>
        
        <p>Remember: It's not about timing the market or finding the perfect investment. It's about being prepared for whatever life brings. And that preparation starts with a solid emergency fund.</p>
      `,
      date: 'Friday, July 25 2025',
      readTime: '12 min read',
      image: '/images/articles/image2.jpg',
      category: 'Personal Finance',
      author: 'NJ Publications'
    },
    'learning-from-mistakes': {
      title: 'Learning from Others\' Mistakes: The Smart Way to Invest',
      excerpt: 'In the world of investing, experience is often the best teacher. However, learning from your own mistakes can be expensive and time-consuming. The smarter approach? Learn from the mistakes of others who have walked the path before you.',
      content: `
        <p>In the world of investing, experience is often the best teacher. However, learning from your own mistakes can be expensive and time-consuming. The smarter approach? Learn from the mistakes of others who have walked the path before you.</p>
        
        <p>Throughout history, investors have made countless errors that have cost them dearly. By studying these mistakes and understanding why they happened, you can avoid falling into the same traps and make more informed investment decisions.</p>
        
        <h3>Common Investment Mistakes to Avoid</h3>
        
        <h4>1. Emotional Investing</h4>
        <p>One of the biggest mistakes investors make is letting emotions drive their decisions. Fear and greed are powerful forces that can lead to poor timing and irrational choices.</p>
        
        <p><strong>The Mistake</strong>: Buying high during market euphoria and selling low during market panics.</p>
        
        <p><strong>The Lesson</strong>: Develop a disciplined investment strategy and stick to it, regardless of market emotions.</p>
        
        <h4>2. Lack of Diversification</h4>
        <p>Many investors put all their eggs in one basket, concentrating their investments in a single stock, sector, or asset class.</p>
        
        <p><strong>The Mistake</strong>: Investing everything in tech stocks during the dot-com bubble or putting all money in real estate before the 2008 crash.</p>
        
        <p><strong>The Lesson</strong>: Diversify across different asset classes, sectors, and geographies to reduce risk.</p>
        
        <h4>3. Trying to Time the Market</h4>
        <p>Countless investors have tried to predict market movements and time their entries and exits perfectly.</p>
        
        <p><strong>The Mistake</strong>: Waiting for the "perfect" time to invest or trying to predict market tops and bottoms.</p>
        
        <p><strong>The Lesson</strong>: Time in the market is more important than timing the market. Consistent, regular investing often outperforms attempts at market timing.</p>
        
        <h4>4. Chasing Performance</h4>
        <p>Investors often chase last year's winners, investing in funds or stocks that have recently performed well.</p>
        
        <p><strong>The Mistake</strong>: Buying mutual funds or stocks based solely on past performance without considering future prospects.</p>
        
        <p><strong>The Lesson</strong>: Past performance doesn't guarantee future results. Focus on fundamentals and long-term potential.</p>
        
        <h4>5. Ignoring Fees and Expenses</h4>
        <p>Many investors underestimate the impact of fees and expenses on their long-term returns.</p>
        
        <p><strong>The Mistake</strong>: Choosing high-fee investment products without considering their impact on returns.</p>
        
        <p><strong>The Lesson</strong>: Pay attention to expense ratios, management fees, and transaction costs. Even small differences in fees can significantly impact long-term wealth.</p>
        
        <h3>Historical Investment Disasters</h3>
        
        <h4>The Dot-Com Bubble (1995-2001)</h4>
        <p>During the late 1990s, investors poured money into internet companies with no profits, believing that traditional valuation metrics didn't apply to the "new economy."</p>
        
        <p><strong>What Went Wrong</strong>: Investors ignored fundamental analysis and bought stocks based on hype and speculation.</p>
        
        <p><strong>The Lesson</strong>: Fundamentals matter. Companies need sustainable business models and the ability to generate profits.</p>
        
        <h4>The 2008 Financial Crisis</h4>
        <p>Many investors were heavily concentrated in real estate and financial stocks, believing that housing prices would never fall nationwide.</p>
        
        <p><strong>What Went Wrong</strong>: Lack of diversification and overconfidence in a single asset class.</p>
        
        <p><strong>The Lesson</strong>: No asset class is immune to significant declines. Diversification is crucial for risk management.</p>
        
        <h4>The Cryptocurrency Boom and Bust (2017-2018)</h4>
        <p>Investors rushed into cryptocurrencies without understanding the technology or risks involved.</p>
        
        <p><strong>What Went Wrong</strong>: FOMO (fear of missing out) drove investment decisions rather than careful analysis.</p>
        
        <p><strong>The Lesson</strong>: Understand what you're investing in and never invest more than you can afford to lose in speculative assets.</p>
        
        <h3>Learning from Successful Investors</h3>
        
        <h4>Warren Buffett's Principles</h4>
        <ul>
          <li>Invest in businesses you understand</li>
          <li>Focus on long-term value creation</li>
          <li>Be patient and disciplined</li>
          <li>Don't try to time the market</li>
        </ul>
        
        <h4>Peter Lynch's Approach</h4>
        <ul>
          <li>Invest in what you know</li>
          <li>Do your homework and research companies thoroughly</li>
          <li>Look for companies with sustainable competitive advantages</li>
          <li>Be willing to hold good investments for the long term</li>
        </ul>
        
        <h4>John Bogle's Philosophy</h4>
        <ul>
          <li>Keep costs low</li>
          <li>Diversify broadly</li>
          <li>Stay the course through market volatility</li>
          <li>Focus on what you can control</li>
        </ul>
        
        <h3>Practical Steps to Avoid Common Mistakes</h3>
        
        <h4>1. Educate Yourself</h4>
        <ul>
          <li>Read books on investing and personal finance</li>
          <li>Understand basic financial concepts</li>
          <li>Learn about different asset classes and investment vehicles</li>
        </ul>
        
        <h4>2. Develop a Written Investment Plan</h4>
        <ul>
          <li>Define your goals and time horizon</li>
          <li>Determine your risk tolerance</li>
          <li>Create an asset allocation strategy</li>
          <li>Document your investment philosophy</li>
        </ul>
        
        <h4>3. Start with the Basics</h4>
        <ul>
          <li>Build an emergency fund first</li>
          <li>Consider low-cost index funds for broad diversification</li>
          <li>Gradually increase your investment knowledge and sophistication</li>
        </ul>
        
        <h4>4. Avoid Common Pitfalls</h4>
        <ul>
          <li>Don't invest based on tips or hot trends</li>
          <li>Resist the urge to check your portfolio daily</li>
          <li>Don't panic during market downturns</li>
          <li>Avoid trying to get rich quick</li>
        </ul>
        
        <h4>5. Seek Professional Guidance</h4>
        <ul>
          <li>Consider working with a fee-only financial advisor</li>
          <li>Get a second opinion on major investment decisions</li>
          <li>Use professional help to create a comprehensive financial plan</li>
        </ul>
        
        <h3>The Power of Compound Learning</h3>
        <p>Just as compound interest can grow your wealth over time, compound learning can improve your investment results. Each mistake you avoid, each lesson you learn from others, and each good habit you develop builds upon the previous ones.</p>
        
        <p>The key is to remain humble and continue learning throughout your investment journey. The market is constantly evolving, and new challenges and opportunities will always emerge.</p>
        
        <h3>Building Your Investment Knowledge</h3>
        
        <h4>Recommended Reading</h4>
        <ul>
          <li>"The Intelligent Investor" by Benjamin Graham</li>
          <li>"A Random Walk Down Wall Street" by Burton Malkiel</li>
          <li>"Common Sense on Mutual Funds" by John Bogle</li>
          <li>"One Up On Wall Street" by Peter Lynch</li>
        </ul>
        
        <h4>Stay Informed</h4>
        <ul>
          <li>Follow reputable financial news sources</li>
          <li>Read annual reports of companies you invest in</li>
          <li>Attend investment seminars and webinars</li>
          <li>Join investment clubs or online communities</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Learning from others' mistakes is one of the most valuable skills you can develop as an investor. By studying the errors of the past and understanding why they occurred, you can avoid repeating them and improve your chances of investment success.</p>
        
        <p>Remember, investing is a marathon, not a sprint. The goal isn't to avoid all mistakes – that's impossible. The goal is to avoid the big, costly mistakes that can derail your financial future while learning from the smaller ones along the way.</p>
        
        <p>Stay humble, keep learning, and let the wisdom of those who came before you guide your investment decisions. Your future self will thank you for taking the time to learn from others' experiences rather than having to learn everything the hard way.</p>
        
        <p>The smart investor doesn't just learn from their own mistakes – they learn from everyone's mistakes. Make this your competitive advantage in the world of investing.</p>
      `,
      date: 'Friday, July 25 2025',
      readTime: '15 min read',
      image: '/images/articles/image3.jpg',
      category: 'Investment Planning',
      author: 'NJ Publications'
    },
    'nivesh-geeta': {
      title: 'Nivesh Geeta: Timeless Investment Wisdom',
      excerpt: 'Just as the Bhagavad Gita provides timeless wisdom for life, the principles of sound investing offer eternal guidance for building wealth. The "Nivesh Geeta" – or Investment Gita – represents the fundamental truths that have guided successful investors for generations.',
      content: `
        <p>Just as the Bhagavad Gita provides timeless wisdom for life, the principles of sound investing offer eternal guidance for building wealth. The "Nivesh Geeta" – or Investment Gita – represents the fundamental truths that have guided successful investors for generations.</p>
        
        <p>These principles transcend market cycles, economic conditions, and technological changes. They are as relevant today as they were decades ago and will continue to be relevant for future generations of investors.</p>
        
        <h3>Chapter 1: The Discipline of Patience</h3>
        <p><strong>"Time in the market beats timing the market"</strong></p>
        
        <p>The greatest investors understand that patience is not just a virtue – it's a necessity. Markets fluctuate in the short term, but over long periods, they tend to reward patient investors who stay the course.</p>
        
        <h4>Key Principles:</h4>
        <ul>
          <li>Start investing early to harness the power of compound growth</li>
          <li>Resist the temptation to make frequent changes to your portfolio</li>
          <li>Understand that volatility is the price you pay for higher long-term returns</li>
          <li>Focus on your long-term goals rather than short-term market movements</li>
        </ul>
        
        <h3>Chapter 2: The Wisdom of Diversification</h3>
        <p><strong>"Don't put all your eggs in one basket"</strong></p>
        
        <p>Diversification is the only free lunch in investing. By spreading your investments across different asset classes, sectors, and geographies, you can reduce risk without necessarily sacrificing returns.</p>
        
        <h4>Key Principles:</h4>
        <ul>
          <li>Invest across different asset classes (stocks, bonds, real estate, commodities)</li>
          <li>Diversify within asset classes (different sectors, company sizes, styles)</li>
          <li>Consider international diversification</li>
          <li>Rebalance periodically to maintain your target allocation</li>
        </ul>
        
        <h3>Chapter 3: The Power of Simplicity</h3>
        <p><strong>"Simplicity is the ultimate sophistication"</strong></p>
        
        <p>The most successful investment strategies are often the simplest ones. Complex strategies may seem impressive, but they often underperform simple, low-cost approaches.</p>
        
        <h4>Key Principles:</h4>
        <ul>
          <li>Consider low-cost index funds for broad market exposure</li>
          <li>Avoid overly complex investment products</li>
          <li>Keep your investment strategy simple enough to understand and explain</li>
          <li>Focus on what you can control: costs, asset allocation, and savings rate</li>
        </ul>
        
        <h3>Chapter 4: The Importance of Costs</h3>
        <p><strong>"Every rupee saved in fees is a rupee earned"</strong></p>
        
        <p>Investment costs compound just like returns – but in the wrong direction. High fees can significantly erode your wealth over time, making cost consciousness essential for long-term success.</p>
        
        <h4>Key Principles:</h4>
        <ul>
          <li>Compare expense ratios when selecting mutual funds</li>
          <li>Understand all fees associated with your investments</li>
          <li>Consider the impact of taxes on your investment returns</li>
          <li>Choose low-cost investment options when possible</li>
        </ul>
        
        <h3>Chapter 5: The Discipline of Regular Investment</h3>
        <p><strong>"Consistency beats perfection"</strong></p>
        
        <p>Regular, systematic investing through methods like SIP (Systematic Investment Plans) can be more effective than trying to time the market perfectly.</p>
        
        <h4>Key Principles:</h4>
        <ul>
          <li>Set up automatic investments to remove emotion from the process</li>
          <li>Invest a fixed amount regularly, regardless of market conditions</li>
          <li>Increase your investment amount as your income grows</li>
          <li>Don't try to time the market – instead, make time your ally</li>
        </ul>
        
        <h3>Chapter 6: The Understanding of Risk</h3>
        <p><strong>"Risk and return are two sides of the same coin"</strong></p>
        
        <p>Understanding and managing risk is crucial for long-term investment success. This means not just avoiding risk, but taking appropriate risks for your situation and goals.</p>
        
        <h4>Key Principles:</h4>
        <ul>
          <li>Understand your risk tolerance and capacity</li>
          <li>Don't take more risk than you can handle emotionally</li>
          <li>Remember that not taking enough risk can also be risky</li>
          <li>Adjust your risk level based on your age and goals</li>
        </ul>
        
        <h3>Chapter 7: The Virtue of Continuous Learning</h3>
        <p><strong>"An investment in knowledge pays the best interest"</strong></p>
        
        <p>The investment landscape is constantly evolving. Successful investors commit to lifelong learning and stay informed about market developments and new opportunities.</p>
        
        <h4>Key Principles:</h4>
        <ul>
          <li>Read books, articles, and research on investing</li>
          <li>Learn from both successes and failures – yours and others'</li>
          <li>Stay informed about economic and market trends</li>
          <li>Seek advice from qualified professionals when needed</li>
        </ul>
        
        <h3>Chapter 8: The Control of Emotions</h3>
        <p><strong>"The investor's chief problem – and even his worst enemy – is likely to be himself"</strong></p>
        
        <p>Emotions are the biggest enemy of successful investing. Fear and greed can lead to poor decisions that destroy wealth over time.</p>
        
        <h4>Key Principles:</h4>
        <ul>
          <li>Develop a written investment plan and stick to it</li>
          <li>Avoid making investment decisions based on emotions</li>
          <li>Don't panic during market downturns</li>
          <li>Don't get overconfident during market upturns</li>
        </ul>
        
        <h3>Chapter 9: The Focus on Goals</h3>
        <p><strong>"A goal without a plan is just a wish"</strong></p>
        
        <p>Successful investing starts with clear goals. Whether you're saving for retirement, your children's education, or a major purchase, having specific goals helps guide your investment decisions.</p>
        
        <h4>Key Principles:</h4>
        <ul>
          <li>Define your financial goals clearly and specifically</li>
          <li>Set both short-term and long-term objectives</li>
          <li>Align your investment strategy with your goals</li>
          <li>Review and adjust your goals as life circumstances change</li>
        </ul>
        
        <h3>Chapter 10: The Practice of Patience</h3>
        <p><strong>"Wealth is built slowly, then suddenly"</strong></p>
        
        <p>Building wealth through investing is a gradual process that requires patience and persistence. The magic of compound growth becomes most apparent over long time periods.</p>
        
        <h4>Key Principles:</h4>
        <ul>
          <li>Start investing as early as possible</li>
          <li>Be patient and let compound growth work its magic</li>
          <li>Don't expect to get rich quickly</li>
          <li>Stay committed to your long-term investment plan</li>
        </ul>
        
        <h3>The Eternal Truths of Investing</h3>
        <p>These principles have guided successful investors for generations:</p>
        
        <ol>
          <li><strong>Time is your greatest asset</strong> – Start early and stay invested</li>
          <li><strong>Diversification reduces risk</strong> – Don't put all your money in one place</li>
          <li><strong>Costs matter</strong> – Keep fees and expenses low</li>
          <li><strong>Consistency beats timing</strong> – Regular investing outperforms market timing</li>
          <li><strong>Emotions are dangerous</strong> – Make rational, not emotional decisions</li>
          <li><strong>Knowledge is power</strong> – Continue learning throughout your investment journey</li>
          <li><strong>Goals provide direction</strong> – Know what you're investing for</li>
          <li><strong>Patience pays</strong> – Good things come to those who wait</li>
          <li><strong>Risk and return are related</strong> – Higher returns require accepting higher risk</li>
          <li><strong>Simplicity works</strong> – Simple strategies often outperform complex ones</li>
        </ol>
        
        <h3>Applying the Nivesh Geeta</h3>
        <p>To apply these timeless principles:</p>
        
        <h4>For Beginners:</h4>
        <ul>
          <li>Start with a simple, diversified portfolio</li>
          <li>Set up systematic investment plans</li>
          <li>Focus on low-cost index funds</li>
          <li>Educate yourself about basic investment concepts</li>
        </ul>
        
        <h4>For Experienced Investors:</h4>
        <ul>
          <li>Review your portfolio for unnecessary complexity</li>
          <li>Ensure your investments align with your goals</li>
          <li>Consider the impact of costs on your returns</li>
          <li>Stay disciplined during market volatility</li>
        </ul>
        
        <h4>For All Investors:</h4>
        <ul>
          <li>Remember that these principles are timeless</li>
          <li>Don't be swayed by market fads or get-rich-quick schemes</li>
          <li>Focus on what you can control</li>
          <li>Stay committed to your long-term plan</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>The Nivesh Geeta reminds us that successful investing is not about finding the next hot stock or timing the market perfectly. It's about following time-tested principles with discipline and patience.</p>
        
        <p>These eternal truths have created wealth for countless investors over the decades. They will continue to do so for those wise enough to follow them.</p>
        
        <p>Remember: In investing, as in life, the simple truths are often the most profound. The Nivesh Geeta provides the roadmap – you just need the discipline to follow it.</p>
        
        <p>May these timeless principles guide you on your journey to financial prosperity and peace of mind.</p>
      `,
      date: 'Friday, July 25 2025',
      readTime: '18 min read',
      image: '/Images/nivesh-geeta.jpg',
      category: 'Investment Philosophy',
      author: 'NJ Publications'
    }
  };

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <button
            onClick={() => navigate('/articles')}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            Back to Articles
          </button>
        </div>
      </div>
    );
  }

  const relatedArticles = Object.entries(articles)
    .filter(([key]) => key !== slug)
    .slice(0, 2)
    .map(([key, data]) => ({
      ...data,
      slug: key
    }));

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/articles')}
            className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Articles
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              {article.title}
            </h1>

            <div className="flex items-center justify-center space-x-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                {article.readTime}
              </div>
              <div className="flex items-center">
                <span>By {article.author}</span>
              </div>
            </div>

            {/* <button className="flex items-center justify-center mx-auto px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <ShareIcon className="h-5 w-5 mr-2" />
              Share Article
            </button> */}
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Related Articles
              </h2>
            </motion.div>

            <Carousel slidesPerView={2} spaceBetween={30} autoplay={false}>
              {relatedArticles.map((relatedArticle, index) => (
                <ArticleCard
                  key={relatedArticle.slug}
                  title={relatedArticle.title}
                  excerpt={relatedArticle.excerpt}
                  date={relatedArticle.date}
                  readTime={relatedArticle.readTime}
                  image={relatedArticle.image}
                  category={relatedArticle.category}
                  slug={relatedArticle.slug}
                  index={index}
                />
              ))}
            </Carousel>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleDetail;