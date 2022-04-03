import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import {  BsTwitter } from 'react-icons/bs';
import {  BsInstagram } from 'react-icons/bs';
import {  BsGithub } from 'react-icons/bs';
import {  GrLinkedinOption } from 'react-icons/gr';
import {  ImAmazon } from 'react-icons/im';

const Footer = () => {
    return (
        <div className="flex justify-center flex-col p-16 bg-slate-200">
            <div className="flex justify-center gap-5 mb-8">
                <a href="/">
                    <FaFacebook />
                </a>

                <a href="/">
                    <BsTwitter />
                </a>

                <a href="/">
                    <BsInstagram />
                </a>

                <a href="/">
                    <BsGithub />
                </a>

                <a href="/">
                    <GrLinkedinOption />
                </a>

                <a href="/">
                    <ImAmazon />
                </a>


            </div>
            <div>
                <h2>All Rights Reserved By © Crypto Cafe | 2022-2026</h2>
            </div>
        </div>
    );
};

export default Footer;