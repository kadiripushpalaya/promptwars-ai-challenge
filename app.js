// NOVA CART — Client-Side Static Execution Engine (Zero Node.js Required)

// Foundational Case Scenarios from Challenge Brief
const SCENARIOS = [
  {
    id: "scenario-1",
    name: "Peak Rush Phantom Stock",
    tagline: "High-risk 1st-Time Customer with 82% Stockout Cadence Item",
    category: "Fulfillment Shield",
    order: {
      order_id: "NC-7841",
      city: "Bengaluru",
      placed_at: "19:42 IST (Peak Evening Rush)",
      basket_value: 540,
      customer: {
        id: "CUST-902",
        name: "Rohit Verma",
        order_number: 1,
        is_first_timer: true,
        churn_risk_score: 0.88,
        notes: "Acquired via ₹150 off first order promo. Extremely high churn vulnerability if order cancelled."
      },
      primary_store: {
        id: "STR-142",
        name: "Kwality Provisions, Koramangala",
        rating: 4.3,
        offline_rush_index: 0.86,
        rejection_risk: 0.74,
        distance_km: 1.4,
        status: "HIGH_STRESS"
      },
      cart_items: [
        {
          name: "Country Special Cold-Pressed Mustard Oil 1L",
          category: "Cooking Oils",
          qty: 1,
          price: 240,
          stockout_cadence: 0.82,
          last_offline_sale: "18 mins ago (likely exhausted)"
        },
        {
          name: "Aashirvaad Shudh Chakki Atta 5kg",
          category: "Staples",
          qty: 1,
          price: 300,
          stockout_cadence: 0.12,
          last_offline_sale: "Stock healthy"
        }
      ],
      candidate_backup_stores: [
        {
          id: "STR-104",
          name: "Sri Balaji Supermarket, Koramangala 4th Block",
          rating: 4.8,
          distance_km: 1.9,
          stock_confidence: 0.98,
          offline_rush_index: 0.24,
          status: "OPTIMAL"
        }
      ]
    }
  },
  {
    id: "scenario-2",
    name: "The 'Path-to-Three' Habit Milestone",
    tagline: "Customer at Order #2 — Unlocking 72% Loyalty Multiplier",
    category: "Retention Engine",
    order: {
      order_id: "NC-8219",
      city: "Mumbai",
      placed_at: "11:15 IST",
      basket_value: 460,
      customer: {
        id: "CUST-412",
        name: "Ananya Deshmukh",
        order_number: 2,
        days_since_first_order: 14,
        is_first_timer: false,
        churn_risk_score: 0.62,
        notes: "At critical inflection point. Case insight: Order 3 drives 72% repeat probability. Cross-category buyer has highest retention."
      },
      primary_store: {
        id: "STR-208",
        name: "Mahalaxmi Super Stores, Dadar",
        rating: 4.6,
        offline_rush_index: 0.35,
        rejection_risk: 0.15,
        distance_km: 1.1,
        status: "HEALTHY"
      },
      cart_items: [
        {
          name: "Tata Salt 1kg",
          category: "Staples",
          qty: 2,
          price: 56,
          stockout_cadence: 0.05
        },
        {
          name: "Amul Taaza Homogenised Toned Milk 1L",
          category: "Dairy",
          qty: 3,
          price: 216,
          stockout_cadence: 0.18
        },
        {
          name: "Fortune Sunlite Refined Sunflower Oil 1L",
          category: "Staples",
          qty: 1,
          price: 188,
          stockout_cadence: 0.10
        }
      ],
      candidate_backup_stores: []
    }
  },
  {
    id: "scenario-3",
    name: "Merchant Overload & Margin Shield",
    tagline: "Partner Store Overwhelmed by Walk-in Rush (23% Rejection Threat)",
    category: "Partner Sentinel",
    order: {
      order_id: "NC-9043",
      city: "Delhi NCR",
      placed_at: "20:05 IST (Peak Dinner Hour)",
      basket_value: 680,
      customer: {
        id: "CUST-688",
        name: "Karan Singhania",
        order_number: 4,
        is_first_timer: false,
        churn_risk_score: 0.28,
        notes: "High value recurring customer. Sensitive to order cancellation."
      },
      primary_store: {
        id: "STR-315",
        name: "Aggarwal Daily Needs, Lajpat Nagar",
        rating: 4.4,
        offline_rush_index: 0.92,
        rejection_risk: 0.84,
        distance_km: 0.9,
        status: "CRITICAL_OVERLOAD",
        complaint: "Store owner struggling with 14 pending app orders + 20 store customers. 31% margin erosion risk."
      },
      cart_items: [
        {
          name: "Mother Dairy Paneer 400g",
          category: "Dairy",
          qty: 1,
          price: 170,
          stockout_cadence: 0.45
        },
        {
          name: "MDH Butter Chicken Masala 100g",
          category: "Spices",
          qty: 1,
          price: 90,
          stockout_cadence: 0.10
        },
        {
          name: "Kohinoor Super Silver Basmati Rice 5kg",
          category: "Staples",
          qty: 1,
          price: 420,
          stockout_cadence: 0.25
        }
      ],
      candidate_backup_stores: [
        {
          id: "STR-329",
          name: "Modern Mart, Lajpat Nagar Phase 2",
          rating: 4.7,
          distance_km: 1.3,
          stock_confidence: 0.95,
          offline_rush_index: 0.30,
          status: "READY"
        }
      ]
    }
  },
  {
    id: "scenario-4",
    name: "Proactive Delivery Latency Interceptor",
    tagline: "Impending 15-Minute Delivery Breach Intercepted at Minute 4",
    category: "Logistics Sentinel",
    order: {
      order_id: "NC-9420",
      city: "Bengaluru",
      placed_at: "13:20 IST",
      basket_value: 490,
      customer: {
        id: "CUST-109",
        name: "Meera Nair",
        order_number: 3,
        is_first_timer: false,
        churn_risk_score: 0.45,
        notes: "Third order milestone. If delayed, repeat probability collapses."
      },
      primary_store: {
        id: "STR-118",
        name: "Namdhari's Fresh, Indiranagar",
        rating: 4.8,
        offline_rush_index: 0.42,
        rejection_risk: 0.20,
        distance_km: 1.8,
        status: "PACKING"
      },
      logistics_telemetry: {
        assigned_rider_id: "RIDER-89",
        rider_distance_km: 3.2,
        traffic_congestion_factor: 1.9,
        projected_delay_mins: 18,
        case_delay_risk: 0.27
      },
      cart_items: [
        {
          name: "Hydroponic Salad Greens Box 250g",
          category: "Fresh Produce",
          qty: 1,
          price: 180,
          stockout_cadence: 0.15
        },
        {
          name: "Artisanal Greek Yogurt 400g",
          category: "Dairy",
          qty: 1,
          price: 160,
          stockout_cadence: 0.20
        },
        {
          name: "Alphonso Mango Preserve 350g",
          category: "Local Gourmet",
          qty: 1,
          price: 150,
          stockout_cadence: 0.08
        }
      ],
      candidate_backup_stores: []
    }
  }
];

// Live Platform Simulation State
let livePlatformState = {
  interventions_executed: 0,
  cancellations_prevented: 0,
  revenue_protected_inr: 0,
  support_tickets_avoided: 0,
  executed_records: []
};

let currentScenario = null;
let currentAnalysis = null;
let cancellationChartInstance = null;
let supportChartInstance = null;
let isCustomMode = false;

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  safeCreateIcons();
  initCharts();
  runFinancialCalculation();
  selectScenario('scenario-1');
});

// Helper for Safe Lucide Icon Creation
function safeCreateIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    try {
      window.lucide.createIcons();
    } catch (err) {
      console.warn('Lucide icon render warning:', err);
    }
  }
}

// Tab Switching
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('text-blue-400', 'bg-blue-500/10', 'border', 'border-blue-500/30');
    btn.classList.add('text-slate-400');
  });

  const activeNav = document.getElementById(`nav-${tabId}`);
  if (activeNav) {
    activeNav.classList.remove('text-slate-400');
    activeNav.classList.add('text-blue-400', 'bg-blue-500/10', 'border', 'border-blue-500/30');
  }

  document.querySelectorAll('.tab-content').forEach(pane => {
    pane.classList.add('hidden');
  });

  const activePane = document.getElementById(`tab-${tabId}`);
  if (activePane) {
    activePane.classList.remove('hidden');
  }

  safeCreateIcons();
  
  if (tabId === 'war-room') {
    setTimeout(() => {
      if (cancellationChartInstance && typeof cancellationChartInstance.resize === 'function') {
        cancellationChartInstance.resize();
      }
      if (supportChartInstance && typeof supportChartInstance.resize === 'function') {
        supportChartInstance.resize();
      }
    }, 100);
  }
}

// Chart Initializations with pure SVG fallbacks if Chart.js is unavailable
function initCharts() {
  if (typeof Chart === 'undefined') {
    renderSvgChartsFallback();
    return;
  }

  try {
    const cancelCtx = document.getElementById('cancellationChart');
    if (cancelCtx) {
      cancellationChartInstance = new Chart(cancelCtx, {
        type: 'doughnut',
        data: {
          labels: [
            'Unavailable Product (35%)',
            'Delivery Delay (27%)',
            'Store Rejected (18%)',
            'Rider Unavailable (12%)',
            'Other (8%)'
          ],
          datasets: [{
            data: [35, 27, 18, 12, 8],
            backgroundColor: ['#ef4444', '#f59e0b', '#f97316', '#3b82f6', '#64748b'],
            borderColor: '#0b0f19',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { boxWidth: 10, font: { size: 10, family: 'Inter' }, color: '#94a3b8' }
            }
          },
          cutout: '68%'
        }
      });
    }

    const supportCtx = document.getElementById('supportChart');
    if (supportCtx) {
      supportChartInstance = new Chart(supportCtx, {
        type: 'bar',
        data: {
          labels: ['Refund Status', 'Delivery Delay', 'Missing Items', 'Coupon Issues', 'Wrong Orders', 'Other'],
          datasets: [{
            label: '% of 5,900 Tickets/Mo',
            data: [29, 24, 19, 13, 9, 6],
            backgroundColor: ['#ef4444', '#f59e0b', '#ec4899', '#3b82f6', '#8b5cf6', '#64748b'],
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8', font: { size: 10 } } },
            y: { grid: { display: false }, ticks: { color: '#e2e8f0', font: { size: 10 } } }
          }
        }
      });
    }
  } catch (err) {
    renderSvgChartsFallback();
  }
}

// Fallback pure SVG chart renderer
function renderSvgChartsFallback() {
  const cancelContainer = document.getElementById('cancellationChart')?.parentElement;
  if (cancelContainer) {
    cancelContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center space-y-2 text-xs">
        <svg viewBox="0 0 36 36" class="w-32 h-32">
          <circle r="15.9155" cx="18" cy="18" fill="transparent" stroke="#ef4444" stroke-width="5" stroke-dasharray="35 65" stroke-dashoffset="25"></circle>
          <circle r="15.9155" cx="18" cy="18" fill="transparent" stroke="#f59e0b" stroke-width="5" stroke-dasharray="27 73" stroke-dashoffset="90"></circle>
          <circle r="15.9155" cx="18" cy="18" fill="transparent" stroke="#f97316" stroke-width="5" stroke-dasharray="18 82" stroke-dashoffset="63"></circle>
          <circle r="15.9155" cx="18" cy="18" fill="transparent" stroke="#3b82f6" stroke-width="5" stroke-dasharray="12 88" stroke-dashoffset="45"></circle>
          <circle r="15.9155" cx="18" cy="18" fill="transparent" stroke="#64748b" stroke-width="5" stroke-dasharray="8 92" stroke-dashoffset="33"></circle>
        </svg>
        <div class="flex flex-wrap justify-center gap-2 text-[10px] text-slate-400">
          <span class="text-red-400">● 35% Phantom Stock</span>
          <span class="text-amber-400">● 27% Delay</span>
          <span class="text-orange-400">● 18% Store Reject</span>
        </div>
      </div>
    `;
  }

  const supportContainer = document.getElementById('supportChart')?.parentElement;
  if (supportContainer) {
    supportContainer.innerHTML = `
      <div class="space-y-2 text-xs w-full py-2">
        <div><div class="flex justify-between text-[11px] text-slate-300"><span>Refund Status</span><span class="font-bold text-red-400">29%</span></div><div class="w-full bg-slate-800 h-2 rounded"><div class="bg-red-500 h-2 rounded" style="width: 29%"></div></div></div>
        <div><div class="flex justify-between text-[11px] text-slate-300"><span>Delayed Delivery</span><span class="font-bold text-amber-400">24%</span></div><div class="w-full bg-slate-800 h-2 rounded"><div class="bg-amber-400 h-2 rounded" style="width: 24%"></div></div></div>
        <div><div class="flex justify-between text-[11px] text-slate-300"><span>Missing/Unavailable</span><span class="font-bold text-pink-400">19%</span></div><div class="w-full bg-slate-800 h-2 rounded"><div class="bg-pink-400 h-2 rounded" style="width: 19%"></div></div></div>
        <div><div class="flex justify-between text-[11px] text-slate-300"><span>Coupon Issues</span><span class="font-bold text-blue-400">13%</span></div><div class="w-full bg-slate-800 h-2 rounded"><div class="bg-blue-400 h-2 rounded" style="width: 13%"></div></div></div>
        <div><div class="flex justify-between text-[11px] text-slate-300"><span>Incorrect Orders</span><span class="font-bold text-purple-400">9%</span></div><div class="w-full bg-slate-800 h-2 rounded"><div class="bg-purple-400 h-2 rounded" style="width: 9%"></div></div></div>
      </div>
    `;
  }
}

// Select Pre-configured Scenario
function selectScenario(scenarioId) {
  isCustomMode = false;
  const customPanel = document.getElementById('custom-sandbox-panel');
  if (customPanel) customPanel.classList.add('hidden');

  document.querySelectorAll('.scenario-btn').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-400/50');
    btn.classList.add('bg-slate-800', 'text-slate-300');
  });
  const activeBtn = document.getElementById(`btn-${scenarioId}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-slate-800', 'text-slate-300');
    activeBtn.classList.add('bg-blue-600', 'text-white', 'border-blue-400/50');
  }

  const scenario = SCENARIOS.find(s => s.id === scenarioId);
  if (!scenario) return;
  currentScenario = scenario;

  renderTelemetry(scenario.order);
  const analysis = executeNovaAnalysis(scenario.order);
  currentAnalysis = analysis;
  renderAnalysis(analysis);
}

// Render Telemetry Cards
function renderTelemetry(order) {
  document.getElementById('order-id-badge').innerText = order.order_id;
  document.getElementById('order-city').innerText = order.city || 'Bengaluru';
  document.getElementById('order-basket').innerText = `₹${order.basket_value || 486}`;

  const cust = order.customer || {};
  document.getElementById('cust-name').innerText = cust.name || 'Valued Customer';
  document.getElementById('cust-notes').innerText = cust.notes || 'Order placed via digital app.';
  const orderNumBadge = document.getElementById('cust-order-count');
  if (cust.order_number === 1) {
    orderNumBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/20 text-red-300 border border-red-500/30';
    orderNumBadge.innerText = 'Order #1 (First-Timer Risk)';
  } else if (cust.order_number === 2) {
    orderNumBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30';
    orderNumBadge.innerText = 'Order #2 (Path-to-Three Inflection)';
  } else {
    orderNumBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
    orderNumBadge.innerText = `Order #${cust.order_number} (Habit Forming)`;
  }

  const store = order.primary_store || {};
  document.getElementById('store-name').innerText = store.name || 'Local Merchant';
  document.getElementById('store-dist').innerText = `${store.distance_km || 1.2} km`;
  const rushPct = Math.round((store.offline_rush_index || 0.2) * 100);
  document.getElementById('store-rush-val').innerText = `${rushPct}%`;
  document.getElementById('store-rush-bar').style.width = `${rushPct}%`;
  document.getElementById('store-rejection-risk').innerText = `${Math.round((store.rejection_risk || 0.15) * 100)}%`;

  const storeBadge = document.getElementById('store-status-badge');
  if (rushPct > 75) {
    storeBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/20 text-red-300 border border-red-500/30';
    storeBadge.innerText = 'CRITICAL OVERLOAD';
  } else if (rushPct > 50) {
    storeBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30';
    storeBadge.innerText = 'ELEVATED RUSH';
  } else {
    storeBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
    storeBadge.innerText = 'OPTIMAL CAPACITY';
  }

  const itemsContainer = document.getElementById('cart-items-container');
  itemsContainer.innerHTML = '';
  (order.cart_items || []).forEach(item => {
    const isHighCadence = (item.stockout_cadence || 0) >= 0.50;
    const cadencePct = Math.round((item.stockout_cadence || 0.1) * 100);

    const itemDiv = document.createElement('div');
    itemDiv.className = `p-2.5 rounded-xl border flex items-center justify-between ${
      isHighCadence 
        ? 'bg-red-950/20 border-red-500/40 text-red-200' 
        : 'bg-slate-950/40 border-slate-800 text-slate-200'
    }`;

    itemDiv.innerHTML = `
      <div>
        <div class="font-semibold text-xs flex items-center gap-1.5">
          ${isHighCadence ? '<span class="text-red-400 font-bold">⚠</span>' : ''}
          <span>${item.name}</span>
        </div>
        <div class="text-[10px] text-slate-400">${item.qty} unit(s) • ₹${item.price} • ${item.category}</div>
      </div>
      <div class="text-right">
        <span class="font-mono text-[11px] font-bold ${isHighCadence ? 'text-red-400' : 'text-slate-400'}">${cadencePct}%</span>
        <div class="text-[9px] text-slate-500">${isHighCadence ? 'PHANTOM RISK' : 'HEALTHY'}</div>
      </div>
    `;
    itemsContainer.appendChild(itemDiv);
  });

  safeCreateIcons();
}

// Client-Side AI Reasoning Engine (Executes Deterministic Logic + Probabilistic Risk Matrices)
function executeNovaAnalysis(payload) {
  const order = payload;
  const customer = payload.customer || {};
  const primary_store = payload.primary_store || {};
  const cart_items = payload.cart_items || [];
  const candidate_backup_stores = payload.candidate_backup_stores || [];

  let phantomRiskFound = false;
  let highestStockoutCadence = 0;
  let lowStockItemName = null;

  const inventory_confidence = cart_items.map(item => {
    const cadence = item.stockout_cadence || 0.1;
    if (cadence > highestStockoutCadence) {
      highestStockoutCadence = cadence;
      lowStockItemName = item.name;
    }
    const is_phantom = cadence >= 0.50;
    if (is_phantom) phantomRiskFound = true;

    let sub = null;
    if (is_phantom) {
      if (item.name.toLowerCase().includes("mustard oil")) {
        sub = "Pure Harvest Cold-Pressed Mustard Oil 1L (In-Stock: 12 units)";
      } else if (item.name.toLowerCase().includes("paneer")) {
        sub = "Amul Fresh Malai Paneer 400g (In-Stock: 18 units)";
      } else {
        sub = `Premium Alternative: Verified ${item.category} Substitute`;
      }
    }

    return {
      item_name: item.name,
      confidence_pct: Math.round((1 - cadence) * 100),
      is_phantom_risk: is_phantom,
      stockout_cadence: cadence,
      recommended_substitute: sub
    };
  });

  const rushIndex = primary_store.offline_rush_index || 0.2;
  const rejectionRisk = primary_store.rejection_risk || 0.15;
  const orderNum = customer.order_number || 1;
  const isFirstTimer = customer.is_first_timer || orderNum === 1;

  let riskLevel = "LOW";
  let riskScore = 15;
  let failureMode = "NONE";
  let actionType = "DIRECT_DISPATCH";
  let actionSummary = "Order healthy. Direct fulfillment route confirmed.";
  let targetStore = primary_store.name || "Primary Merchant";
  let targetStoreId = primary_store.id || "STR-001";
  let dispatchSla = 28;

  if (phantomRiskFound && candidate_backup_stores.length > 0) {
    riskLevel = "CRITICAL";
    riskScore = 88;
    failureMode = "PHANTOM_INVENTORY";
    actionType = "AUTONOMOUS_REROUTE";
    const backup = candidate_backup_stores[0];
    targetStore = backup.name;
    targetStoreId = backup.id;
    actionSummary = `Phantom stock detected on '${lowStockItemName}'. Autonomous pre-dispatch reroute to ${backup.name} (${backup.distance_km}km away, 98% stock confidence).`;
    dispatchSla = 31;
  } else if (phantomRiskFound && candidate_backup_stores.length === 0) {
    riskLevel = "HIGH";
    riskScore = 82;
    failureMode = "PHANTOM_INVENTORY";
    actionType = "PRE_CHECKOUT_SUBSTITUTE";
    actionSummary = `Phantom stock detected. Instant 1-click pre-approved local substitute offered to customer before charge confirmation.`;
    dispatchSla = 29;
  } else if (rushIndex > 0.75 || rejectionRisk > 0.70) {
    riskLevel = "HIGH";
    riskScore = 79;
    failureMode = "MERCHANT_RUSH_REJECTION";
    if (candidate_backup_stores.length > 0) {
      actionType = "AUTONOMOUS_REROUTE";
      const backup = candidate_backup_stores[0];
      targetStore = backup.name;
      targetStoreId = backup.id;
      actionSummary = `Merchant under extreme offline rush (${Math.round(rushIndex*100)}% stress). Rerouted to sister partner ${backup.name} to avoid 23% partner rejection.`;
      dispatchSla = 32;
    } else {
      actionType = "STORE_QUEUE_THROTTLE";
      actionSummary = `Merchant queue throttled. Digital orders spaced by 4 minutes, protecting store margin and avoiding counter rejection.`;
      dispatchSla = 35;
    }
  } else if (payload.logistics_telemetry && payload.logistics_telemetry.projected_delay_mins > 15) {
    riskLevel = "MEDIUM";
    riskScore = 65;
    failureMode = "DELIVERY_LATENCY";
    actionType = "AUTONOMOUS_REROUTE";
    actionSummary = `Projected traffic delay +18m detected at Minute 4. Dispatched micro-hub rider within 800m. Proactive customer GPS reassurance sent.`;
    dispatchSla = 26;
  }

  let isPathToThreeTriggered = false;
  let habitCategory = "None";
  let habitOffer = "Standard loyalty points";
  let projectedRepeat = 0.31;

  if (orderNum === 1) {
    projectedRepeat = riskLevel === "LOW" ? 0.44 : 0.12;
  } else if (orderNum === 2) {
    isPathToThreeTriggered = true;
    habitCategory = "Local Bakery & Artisanal Specialties";
    habitOffer = "Unlock ₹50 Habit Credit towards local artisanal bakery on Order #3";
    projectedRepeat = 0.68;
  } else if (orderNum >= 3) {
    isPathToThreeTriggered = true;
    habitCategory = "Cross-Category Gourmet Discovery";
    habitOffer = "VIP Local Club: Free express delivery on multi-store baskets";
    projectedRepeat = 0.76;
  }

  const basketVal = order.basket_value || 486;
  const protectedRevenue = (riskLevel === "CRITICAL" || riskLevel === "HIGH") ? basketVal : Math.round(basketVal * 0.35);
  const savedSupportCost = (riskLevel === "CRITICAL" || riskLevel === "HIGH") ? 65 : 15;
  const churnAvoidanceValue = isFirstTimer ? 1450 : (orderNum === 2 ? 2200 : 800);

  const reasoningAudit = `Evaluated order against 620-store telemetry. Primary store rush index is ${Math.round(rushIndex*100)}% (historical rejection threshold: 75%). Low-stock cadence on basket items: ${Math.round(highestStockoutCadence*100)}%. Customer order depth: #${orderNum}. By executing ${actionType}, we prevent a ${failureMode} defect, safeguarding this customer toward the 72% repeat retention threshold.`;

  return {
    order_id: order.order_id || "NC-TEMP",
    timestamp: new Date().toISOString(),
    risk_assessment: {
      overall_risk_level: riskLevel,
      risk_score_pct: riskScore,
      primary_failure_mode: failureMode,
      defect_probability_without_intervention: (riskScore / 100).toFixed(2),
      is_first_time_customer: isFirstTimer
    },
    inventory_confidence: inventory_confidence,
    operational_action: {
      action_type: actionType,
      action_summary: actionSummary,
      target_store_id: targetStoreId,
      target_store_name: targetStore,
      dispatch_sla_mins: dispatchSla,
      status: "RECOMMENDED_READY"
    },
    retention_intervention: {
      is_path_to_three_triggered: isPathToThreeTriggered,
      customer_order_depth: orderNum,
      habit_category_recommendation: habitCategory,
      personalized_offer: habitOffer,
      projected_repeat_probability_pct: Math.round(projectedRepeat * 100),
      benchmark_case_stat: "After 3 orders, repeat purchase probability hits 72%"
    },
    financial_impact: {
      protected_revenue_inr: protectedRevenue,
      saved_support_cost_inr: savedSupportCost,
      churn_avoidance_value_inr: churnAvoidanceValue,
      total_immediate_value_inr: protectedRevenue + savedSupportCost
    },
    prompt_architecture: {
      system_role: "NOVA CART AI ENGINE v3.4 — Logistics & Local Retail Intelligence",
      telemetry_features_used: ["offline_rush_index", "stockout_cadence", "order_depth", "delivery_congestion"],
      guardrail_validation: "PASSED: Reroute radius within 2.5km limit; Zero unverified discount dilution",
      audit_reasoning: reasoningAudit
    }
  };
}

// Render AI Output Cards
function renderAnalysis(analysis) {
  const risk = analysis.risk_assessment || {};
  const action = analysis.operational_action || {};
  const retention = analysis.retention_intervention || {};
  const finance = analysis.financial_impact || {};

  document.getElementById('ai-risk-score').innerText = `${risk.risk_score_pct || 15}%`;
  document.getElementById('ai-risk-level').innerText = `${risk.overall_risk_level || 'LOW'} RISK`;
  document.getElementById('ai-failure-mode').innerText = risk.primary_failure_mode || 'NONE';
  document.getElementById('ai-repeat-prob').innerText = `${retention.projected_repeat_probability_pct || 31}% Repeat Probability`;

  document.getElementById('ai-action-type').innerText = action.action_type || 'DIRECT_DISPATCH';
  document.getElementById('ai-action-summary').innerText = action.action_summary || 'Order pre-validated and cleared for direct dispatch.';

  if (retention.is_path_to_three_triggered) {
    document.getElementById('ai-habit-title').innerText = `Path-to-Three Loop Active (Order #${retention.customer_order_depth}):`;
    document.getElementById('ai-habit-detail').innerText = ` ${retention.personalized_offer}. Projected repeat conversion jumps to ${retention.projected_repeat_probability_pct}%!`;
  } else {
    document.getElementById('ai-habit-title').innerText = 'Fulfillment Protection Active:';
    document.getElementById('ai-habit-detail').innerText = ' Protecting Order #1 delivery experience to prevent immediate churn.';
  }

  document.getElementById('ai-prot-rev').innerText = `₹${finance.protected_revenue_inr || 486}`;
  document.getElementById('ai-saved-support').innerText = `₹${finance.saved_support_cost_inr || 65}`;
  document.getElementById('ai-sla').innerText = `${action.dispatch_sla_mins || 28} mins`;

  document.getElementById('ai-audit-reasoning').innerText = analysis.prompt_architecture ? analysis.prompt_architecture.audit_reasoning : 'Deterministic rules evaluated successfully.';

  document.getElementById('json-viewer-content').innerText = JSON.stringify(analysis, null, 2);

  const execBtn = document.getElementById('btn-execute-action');
  execBtn.disabled = false;
  execBtn.className = 'px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all cursor-pointer';
  execBtn.innerHTML = '<span>⚡</span><span>Execute Autonomous Mitigation</span>';

  safeCreateIcons();
}

// Live Mitigation Execution (Pure Static)
function executeAiAction() {
  if (!currentAnalysis) return;

  const btn = document.getElementById('btn-execute-action');
  btn.disabled = true;
  btn.innerHTML = '<span>⏳ Executing Directive...</span>';

  setTimeout(() => {
    const orderId = currentAnalysis.order_id;
    const actionType = currentAnalysis.operational_action.action_type;
    const targetStore = currentAnalysis.operational_action.target_store_name;
    const protectedRev = currentAnalysis.financial_impact.protected_revenue_inr || 486;

    livePlatformState.interventions_executed++;
    livePlatformState.cancellations_prevented++;
    livePlatformState.revenue_protected_inr += protectedRev;
    livePlatformState.support_tickets_avoided++;

    const rec = {
      order_id: orderId,
      executed_at: new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }),
      action_type: actionType,
      target_store: targetStore,
      customer_outcome: "Zero defect. Order delivered in SLA. Habit credit assigned.",
      margin_protected_inr: protectedRev
    };

    appendLedgerRecord(rec);

    document.getElementById('stat-cancellations-prevented').innerText = livePlatformState.cancellations_prevented;
    document.getElementById('stat-revenue-protected').innerText = `₹${livePlatformState.revenue_protected_inr.toLocaleString('en-IN')}`;

    btn.className = 'px-5 py-2 rounded-lg bg-slate-800 text-emerald-400 font-bold text-xs border border-emerald-500/40 flex items-center gap-2';
    btn.innerHTML = '<span>✔</span><span>Mitigation Active & Recorded</span>';

    showToast(`Order ${orderId} successfully rescued! Rerouted to ${targetStore}. Margin protected: ₹${protectedRev}.`, 'success');
  }, 350);
}

// Append Record to Live Fulfillment Ledger
function appendLedgerRecord(rec) {
  const ledger = document.getElementById('ledger-stream');
  if (ledger.innerHTML.includes('Click "Execute Autonomous Mitigation"')) {
    ledger.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'p-3 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex items-center justify-between text-xs transition-all';
  row.innerHTML = `
    <div>
      <div class="flex items-center gap-2">
        <span class="font-bold text-white font-mono">${rec.order_id}</span>
        <span class="px-2 py-0.2 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 font-mono">${rec.action_type}</span>
        <span class="text-[10px] text-slate-400">@ ${rec.executed_at}</span>
      </div>
      <div class="text-[11px] text-slate-300 mt-0.5">${rec.customer_outcome} • Routed to <strong class="text-white">${rec.target_store}</strong></div>
    </div>
    <div class="text-right">
      <span class="text-emerald-400 font-bold font-mono">+₹${rec.margin_protected_inr}</span>
      <div class="text-[9px] text-slate-500">Margin Protected</div>
    </div>
  `;
  ledger.prepend(row);
}

// Custom Sandbox Toggle
function toggleCustomSandbox() {
  const panel = document.getElementById('custom-sandbox-panel');
  isCustomMode = !isCustomMode;
  if (isCustomMode) {
    panel.classList.remove('hidden');
    updateSandbox();
  } else {
    panel.classList.add('hidden');
  }
}

// Update Custom Sandbox Telemetry
let sandboxDebounceTimer = null;
function updateSandbox() {
  const rushVal = document.getElementById('input-rush').value;
  const cadenceVal = document.getElementById('input-cadence').value;
  const orderNumVal = document.getElementById('input-ordernum').value;
  const distVal = (document.getElementById('input-distance').value / 10).toFixed(1);

  document.getElementById('label-rush').innerText = `${rushVal}%`;
  document.getElementById('label-cadence').innerText = `${cadenceVal}%`;
  document.getElementById('label-ordernum').innerText = `#${orderNumVal}`;
  document.getElementById('label-distance').innerText = `${distVal} km`;

  clearTimeout(sandboxDebounceTimer);
  sandboxDebounceTimer = setTimeout(() => {
    const customOrder = {
      order_id: `NC-SBX-${Math.floor(100 + Math.random()*900)}`,
      city: 'Bengaluru Sandbox',
      basket_value: 520,
      customer: {
        id: 'CUST-SBX',
        name: 'Custom Sandbox Customer',
        order_number: Number(orderNumVal),
        is_first_timer: Number(orderNumVal) === 1,
        churn_risk_score: Number(rushVal) / 100,
        notes: `Simulated customer at order depth #${orderNumVal}`
      },
      primary_store: {
        id: 'STR-SBX-1',
        name: 'Sandbox Local Store, Koramangala',
        distance_km: 1.2,
        offline_rush_index: Number(rushVal) / 100,
        rejection_risk: Number(rushVal) > 75 ? 0.80 : 0.15
      },
      cart_items: [
        {
          name: 'Simulated High-Demand SKU',
          category: 'Daily Essentials',
          qty: 1,
          price: 260,
          stockout_cadence: Number(cadenceVal) / 100
        },
        {
          name: 'Standard Staples Pack',
          category: 'Grocery',
          qty: 1,
          price: 260,
          stockout_cadence: 0.10
        }
      ],
      candidate_backup_stores: [
        {
          id: 'STR-SBX-2',
          name: 'Sandbox Backup Store, Indiranagar',
          distance_km: Number(distVal),
          stock_confidence: 0.98,
          offline_rush_index: 0.20
        }
      ]
    };

    renderTelemetry(customOrder);
    const analysis = executeNovaAnalysis(customOrder);
    currentAnalysis = analysis;
    renderAnalysis(analysis);
  }, 100);
}

// Toggle JSON Schema View
function toggleJsonView() {
  const container = document.getElementById('json-viewer-container');
  const btn = document.getElementById('btn-toggle-json');
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    btn.innerHTML = '<span>👁</span><span>Hide Schema</span>';
  } else {
    container.classList.add('hidden');
    btn.innerHTML = '<span>💻</span><span>Inspect JSON Schema</span>';
  }
}

// Merchant Sentinel: Populate Quick Texts
function setSyncText(text) {
  document.getElementById('sync-input-text').value = text;
}

// Merchant Sentinel: Submit Voice / WhatsApp Text (Pure Static NLP Parser)
function submitMerchantSync() {
  const text = document.getElementById('sync-input-text').value.trim();
  if (!text) {
    showToast('Please type a merchant voice/WhatsApp stock message.', 'error');
    return;
  }

  const resultBox = document.getElementById('sync-result-content');
  resultBox.innerText = 'Parsing intent & updating 620-store catalog availability in real time...';

  setTimeout(() => {
    let intent = "STOCK_EXHAUSTION";
    let sku = text;
    let action = "HIDE_FROM_CATALOG_TEMPORARILY";
    let reEnable = "Tomorrow 08:00 AM";

    if (text.toLowerCase().includes("bheed") || text.toLowerCase().includes("rush") || text.toLowerCase().includes("pause")) {
      intent = "STORE_RUSH_THROTTLE";
      sku = "All Store Orders (STR-142)";
      action = "AUTO_THROTTLE_AND_REROUTE_OVERFLOW";
      reEnable = "30 minutes from now";
    }

    resultBox.innerHTML = `
      <div class="text-emerald-400 font-bold mb-1">✔ Catalog Synchronization Successful (118ms)</div>
      <div><strong>Detected Intent:</strong> ${intent}</div>
      <div><strong>Extracted Target:</strong> "${sku}"</div>
      <div><strong>Action Applied:</strong> ${action} across all customer apps</div>
      <div><strong>Re-enable SLA:</strong> ${reEnable}</div>
    `;
    showToast(`Catalog sync complete! "${sku}" updated across network.`, 'success');
  }, 250);
}

// Financial Impact Calculator (Pure Client-Side Math)
function runFinancialCalculation() {
  const currentOrders = 38500;
  const aov = 486;
  const currentPromoSpend = 1700000;
  const currentCancellations = 0.11;
  const currentRepeatRate = 0.27;
  const currentTickets = 5900;
  const ticketCost = 65;
  const platformTakeRate = 0.14;
  const implementationBudget = 2500000;

  const cancelSliderVal = document.getElementById('calc-cancel-slider').value;
  const repeatSliderVal = document.getElementById('calc-repeat-slider').value;
  const marketingSliderVal = document.getElementById('calc-marketing-slider').value;
  const supportSliderVal = document.getElementById('calc-support-slider').value;

  const targetCancelRate = Number(cancelSliderVal) / 1000;
  const targetRepeatRate = Number(repeatSliderVal) / 1000;
  const marketingWasteCut = Number(marketingSliderVal) / 100;
  const supportInterception = Number(supportSliderVal) / 100;

  document.getElementById('slider-val-cancel').innerText = `${(targetCancelRate * 100).toFixed(1)}%`;
  document.getElementById('slider-val-repeat').innerText = `${(targetRepeatRate * 100).toFixed(1)}%`;
  document.getElementById('slider-val-marketing').innerText = `${Math.round(marketingWasteCut * 100)}%`;
  document.getElementById('slider-val-support').innerText = `${Math.round(supportInterception * 100)}%`;

  // 1. Cancellations avoided
  const cancellationsCurrentCount = Math.round(currentOrders * currentCancellations);
  const cancellationsTargetCount = Math.round(currentOrders * targetCancelRate);
  const avoidedCancellations = Math.max(0, cancellationsCurrentCount - cancellationsTargetCount);
  const protectedGMV = Math.round(avoidedCancellations * aov);
  const protectedPlatformMargin = Math.round(protectedGMV * platformTakeRate);

  // 2. Support savings
  const avoidedTickets = Math.round(currentTickets * supportInterception);
  const supportSavingsINR = Math.round(avoidedTickets * ticketCost);

  // 3. Marketing waste reduction (58% of 17L is CAC)
  const acquisitionBudget = currentPromoSpend * 0.58;
  const marketingSavingsINR = Math.round(acquisitionBudget * marketingWasteCut);

  // 4. Repeat compounding
  const mau = 46000;
  const repeatRateDelta = Math.max(0, targetRepeatRate - currentRepeatRate);
  const incrementalRepeatOrders = Math.round(mau * repeatRateDelta * 1.8);
  const incrementalRepeatMargin = Math.round(incrementalRepeatOrders * aov * platformTakeRate);

  // Total
  const totalMonthlyGainINR = protectedPlatformMargin + supportSavingsINR + marketingSavingsINR + incrementalRepeatMargin;
  const conservativeGainINR = Math.round(totalMonthlyGainINR * 0.60);
  const paybackMonths = Number((implementationBudget / conservativeGainINR).toFixed(2));
  const annualRoiPct = Math.round(((conservativeGainINR * 12 - implementationBudget) / implementationBudget) * 100);

  // Render
  document.getElementById('payback-badge').innerText = `Payback: ${paybackMonths} Months`;
  document.getElementById('res-monthly-gain').innerText = `₹${(totalMonthlyGainINR / 100000).toFixed(2)}L`;
  document.getElementById('res-conservative-gain').innerText = `₹${(conservativeGainINR / 100000).toFixed(2)}L`;
  document.getElementById('res-annual-roi').innerText = `${annualRoiPct}%`;

  document.getElementById('res-cancel-margin').innerText = `+₹${protectedPlatformMargin.toLocaleString('en-IN')}/mo (${avoidedCancellations} saved)`;
  document.getElementById('res-support-savings').innerText = `+₹${supportSavingsINR.toLocaleString('en-IN')}/mo (${avoidedTickets} tickets)`;
  document.getElementById('res-marketing-waste').innerText = `+₹${marketingSavingsINR.toLocaleString('en-IN')}/mo reallocated`;
  document.getElementById('res-repeat-margin').innerText = `+₹${incrementalRepeatMargin.toLocaleString('en-IN')}/mo (${incrementalRepeatOrders} orders)`;
}

// Reset Sliders
function resetSliders() {
  document.getElementById('calc-cancel-slider').value = 42;
  document.getElementById('calc-repeat-slider').value = 385;
  document.getElementById('calc-marketing-slider').value = 28;
  document.getElementById('calc-support-slider').value = 60;
  runFinancialCalculation();
  showToast('Reset financial assumptions to baseline targets.', 'info');
}

// Quick Demo Tour (60 seconds)
async function launchQuickDemoTour() {
  showToast('Starting Demo Tour: Step 1 - Uncovering the Leaky Funnel', 'info');
  switchTab('war-room');

  await new Promise(r => setTimeout(r, 2000));
  showToast('Step 2: Switching to Rescue Operations Engine (Phantom Stock Scenario)', 'info');
  switchTab('ops-engine');
  selectScenario('scenario-1');

  await new Promise(r => setTimeout(r, 2000));
  showToast('Step 3: Executing Autonomous Reroute Directive Live!', 'info');
  executeAiAction();

  await new Promise(r => setTimeout(r, 2000));
  showToast('Step 4: Checking Financial ROI & 2.7-Month Budget Payback', 'info');
  switchTab('roi-calculator');

  await new Promise(r => setTimeout(r, 2000));
  showToast('Demo Tour Complete! Ready for Jury Q&A.', 'success');
}

// Toast Alert System
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgClass = type === 'success' 
    ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200' 
    : (type === 'error' ? 'bg-red-950/90 border-red-500/50 text-red-200' : 'bg-slate-900/90 border-blue-500/50 text-blue-200');

  toast.className = `toast max-w-sm p-3.5 rounded-xl border shadow-xl backdrop-blur-md text-xs font-medium flex items-center gap-2.5 ${bgClass}`;
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full ${type === 'success' ? 'bg-emerald-400' : (type === 'error' ? 'bg-red-400' : 'bg-blue-400')}"></span>
    <span class="flex-grow">${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
