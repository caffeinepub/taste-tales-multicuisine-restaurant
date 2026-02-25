# HTTPS/TLS Deployment Guide for Internet Computer

This guide covers the steps to enable HTTPS with a valid SSL/TLS certificate for your Taste & Tales application deployed on the Internet Computer.

## Overview

The Internet Computer provides built-in HTTPS support for custom domains through its boundary nodes. When you configure a custom domain, the IC automatically provisions and manages SSL/TLS certificates using Let's Encrypt.

## Prerequisites

- A registered domain name (e.g., `tasteandtales.com`)
- Access to your domain's DNS settings
- Your application deployed to the Internet Computer
- Your frontend canister ID

## Step 1: Configure Custom Domain

### 1.1 Add DNS Records

Add the following DNS records to your domain:

**For apex domain (tasteandtales.com):**
