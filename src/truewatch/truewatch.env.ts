export const TRUEWATCH_CONFIG = {
  // TrueWatch Agent 配置
  AGENT_URL: process.env.DD_AGENT_HOST || 'localhost',
  ENDPOINT: process.env.DD_TRACE_AGENT_PORT || '9529',
  
  // Workspace 配置
  WORKSPACE_ID: process.env.DD_WORKSPACE_ID || '1', // TrueWatch-Guance-JointDemo workspace ID
  
  // 服務配置
  SERVICE_NAME: process.env.DD_SERVICE || 'nestjs-realworld',
  SERVICE_VERSION: process.env.DD_VERSION || '1.0.0',
  
  // 環境配置
  ENV: process.env.DD_ENV || 'development',
  LOG_LEVEL: process.env.DD_LOG_LEVEL || 'error',
  
  // 採樣配置
  SAMPLE_RATE: parseFloat(process.env.DD_TRACE_SAMPLE_RATE || '1.0'),
  
  // 性能分析配置
  PROFILING_ENABLED: process.env.DD_PROFILING_ENABLED === 'true',
  PROFILING_SAMPLE_RATE: parseFloat(process.env.DD_PROFILING_SAMPLE_RATE || '1.0'),

  // 額外配置
  RUNTIME_METRICS_ENABLED: process.env.DD_RUNTIME_METRICS_ENABLED === 'true',
  ANALYTICS_ENABLED: process.env.DD_TRACE_ANALYTICS_ENABLED === 'true'
}; 