import React from 'react'
import { Modal } from 'antd'

export default function FormModal({ isVisible, onCancel, children }) {
    return (
        <Modal
            visible={isVisible}
            footer={null}
            onCancel={onCancel}
            forceRender
            // centered
            destroyOnClose
            style={{ top: 20 }}
            className='modal-custom'
        >
            {children}
        </Modal>
    )
}