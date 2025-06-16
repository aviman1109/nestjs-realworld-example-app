import tracer from 'dd-trace';
import { TRUEWATCH_CONFIG } from './truewatch.env';

export const initTrueWatch = () => {
  // 初始化 tracer
  tracer.init({
    // 基本配置
    service: TRUEWATCH_CONFIG.SERVICE_NAME,
    env: TRUEWATCH_CONFIG.ENV,
    version: TRUEWATCH_CONFIG.SERVICE_VERSION,
    
    // 日誌和調試配置
    logInjection: true,
    logLevel: TRUEWATCH_CONFIG.LOG_LEVEL as "error" | "debug" | undefined,
    
    // 性能監控配置
    runtimeMetrics: TRUEWATCH_CONFIG.RUNTIME_METRICS_ENABLED,
    
    // TrueWatch 連接配置
    hostname: TRUEWATCH_CONFIG.AGENT_URL,
    port: parseInt(TRUEWATCH_CONFIG.ENDPOINT, 10),
    
    // 標籤配置
    tags: {
      'workspace.id': TRUEWATCH_CONFIG.WORKSPACE_ID,
      'service.name': TRUEWATCH_CONFIG.SERVICE_NAME,
      'service.version': TRUEWATCH_CONFIG.SERVICE_VERSION,
      'deployment.environment': TRUEWATCH_CONFIG.ENV
    },
    
    // 採樣配置
    sampleRate: TRUEWATCH_CONFIG.SAMPLE_RATE,
    
    // 性能分析配置
    profiling: TRUEWATCH_CONFIG.PROFILING_ENABLED,

    dogstatsd: {
      hostname: 'datakit',
      port: 9529,
    }
  });

  // 導出 tracer 實例
  return tracer;
}; 