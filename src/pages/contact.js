import React, { Component } from 'react'
import Layout from '../layout'
import Link from "next/link";
import matter from "gray-matter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Quote from "../components/Quote";
import styled from 'styled-components';

const Contact=(props)=>{
    const frontmatter = props.data
    const markdownBody = props.content
    return (
            <Layout>
                <Head>
                    <title> {frontmatter.title} </title>
                </Head>
                <div class="page-title-area page-title-bg3">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>Contact</h2>
                            <ul>
                                <li><a> Home </a></li>
                                <li> {frontmatter.title} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="contact-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">Message Us</span>
                    <h2>Drop us Message for any Query</h2>
                    <p> <ReactMarkdown source={markdownBody} /></p>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="contact-form">
                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Name"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
    
                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Email"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
    
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" class="form-control" placeholder="Phone"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
    
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea name="message" class="form-control" id="message" cols="30" rows="6" required data-error="Write your message" placeholder="Your Message"></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
    
                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="default-btn">Send Message <span></span></button>
                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div id="map"></div>
                    </div>
                </div>

                <div class="contact-info">
                    <div class="contact-info-content">
                        <h3>Contact us by Phone Number or Email Address</h3>
                        <h2>
                            <a href="tel:+260 211 229345">+260 211 229345</a>
                            <span>OR</span>
                            <a href="mailto:info@zsicgi.co.zm">info@zsicgi.co.zm</a>
                        </h2>

                        <ul class="social">
                            <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="bg-map"><img src="/assets/img/bg-map.png" alt="image"/></div>
        </section>
            </Layout>
        )
    }
Contact.getInitialProps = async function() {
    const content = await import(`../data/contact.md`)
    const data = matter(content.default)
    
          //get posts & context from folder
    const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
    // Create slug from filename
        const slug = key
            .replace(/^.*[\\\/]/, "")
            .split(".")
            .slice(0, -1)
            .join(".");
          const value = values[index];
          // Parse yaml metadata & markdownbody in document
          const document = matter(value.default);
          return {
            document,
            slug
          };
        });
        return data;
      })(require.context("../services", true, /\.md$/));
      
        return {
            allInsurances: posts,
          ...data
        }
      }

export default Contact