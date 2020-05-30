---
layout: post
title: Add some flavour to your ls
categories: linux
author: Sharad Raj
image: ""
date: 2020-05-30 12:00:00
---
Most of us use `ls` just the way it is provided by default but today we are going to add some falvour to boring `ls` using `exa`, as they say `exa` is a modern version of `ls`.

But wait a minute before we begin the setup lets see what is the difference bewteen the ls before it and afterwards.

Before exa

![Before exa](/assets/uploads/term_bf_exa.png "Before exa")

After exa

![After exa](/assets/uploads/term_af_exa..png "After exa")

**So Let's begin !!!**

## STEP-1: Installing exa using cargo

If you don't have cargo already installed you need to install it first and then proceed further.

Ununtu users can install it via apt

```bash
sudo apt-get install cargo
```

For other distros visit [this link](https://doc.rust-lang.org/cargo/getting-started/installation.html), it will take just few minutes.

- - -

Now that you have cargo installed run the following command

```bash
cargo install exa
```

it will take around 4-5 minute because of the build process of `exa`

## STEP-2: Adding exa to the PATH

Open your terminal's rc file and just add the following to it

```bash
# PATH
export PATH=$HOME/.cargo/bin:$PATH

# Alias
alias ls="exa -al --color=always --group-directories-first"
```

- - -

### That's it

you have successfully configured your terminal the fancy ls :)