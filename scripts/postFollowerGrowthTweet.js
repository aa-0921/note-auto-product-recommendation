#!/usr/bin/env node

// postFollowerGrowthTweet.js
// フォロワー増加用のTwitter投稿スクリプト

import 'dotenv/config';
import RandomPostService from '@aa-0921/note-auto-core/src/services/RandomPostService.js';
import Logger from '@aa-0921/note-auto-core/src/utils/Logger.js';
import { posts } from '../data/follower-growth-posts.js';

const logger = new Logger();
const args = process.argv.slice(2);
const isDryrun = args.includes('--dryrun');

async function main() {
  try {
    logger.info('========================================');
    logger.info('フォロワー増加用Twitter投稿');
    logger.info('========================================');
    logger.info('');

    if (isDryrun) {
      logger.info('⚠️ DRYRUNモード: 実際には投稿しません');
      logger.info('');
    }

    const service = new RandomPostService(logger);

    await service.postRandomTweet(posts, { dryrun: isDryrun });

  } catch (error) {
    logger.error('❌ エラーが発生しました');
    logger.error('エラー内容:', error.message);
    process.exit(1);
  }
}

main();

